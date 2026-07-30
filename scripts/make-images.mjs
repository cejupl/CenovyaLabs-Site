/**
 * Derives every image the site needs from the single logo master.
 *
 *   src/assets/logo.jpeg   ->  src/assets/generated/logo-mark.png    (emblem, header)
 *                              src/assets/generated/logo-lockup.png  (full lockup)
 *                              public/favicon.png                    (128px emblem)
 *                              public/apple-touch-icon.png           (180px, opaque)
 *                              public/og-image.png                   (1200x630 social card)
 *
 * The two display assets land in src/assets so Astro optimises them to sized
 * WebP at build time; only the fixed-URL assets go in public/.
 *
 * The master is a JPEG, so its "white" background is really 253-255 and sharp's
 * `unflatten()` (pure white only) cannot lift it. `keyOutWhite` builds an alpha
 * channel from luminance instead, which both drops the background and keeps the
 * anti-aliased edges soft. The result is a logo that sits on any surface.
 *
 * Run with `npm run images` after replacing the master.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const master = path.join(root, 'src/assets/logo.jpeg');
const out = (name) => path.join(root, 'public', name);
const asset = (name) => path.join(root, 'src/assets/generated', name);

const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const CLEAR = { r: 255, g: 255, b: 255, alpha: 0 };

/**
 * Turns the near-white field transparent. Pixels at or above `hi` luminance go
 * fully clear, at or below `lo` stay fully opaque, and the band between them
 * ramps - which is what keeps curved edges from turning jagged.
 */
async function keyOutWhite(buffer, { hi = 247, lo = 228 } = {}) {
  const { data, info } = await sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const pixels = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const alpha = lum >= hi ? 0 : lum <= lo ? 255 : Math.round((255 * (hi - lum)) / (hi - lo));
    pixels[i] = data[i];
    pixels[i + 1] = data[i + 1];
    pixels[i + 2] = data[i + 2];
    pixels[i + 3] = Math.min(alpha, data[i + 3]);
  }
  return sharp(pixels, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer();
}

await mkdir(path.join(root, 'public'), { recursive: true });
await mkdir(path.join(root, 'src/assets/generated'), { recursive: true });

// 1. Full lockup, trimmed of its white margin so layout padding is ours to set.
const lockupOpaque = await sharp(master).trim({ threshold: 12 }).png().toBuffer();
const lockup = await keyOutWhite(lockupOpaque);
await sharp(lockup).toFile(asset('logo-lockup.png'));

// 2. The emblem alone. The master stacks the mark over the wordmark; the mark
//    ends around 62% of the trimmed height, comfortably above the cap line of
//    "CENOVYA". Extract and trim must be separate passes - sharp fixes its own
//    operation order within a pipeline, so a chained trim would run against the
//    original rather than the extracted region.
const { width, height } = await sharp(lockupOpaque).metadata();
const markRaw = await sharp(lockupOpaque)
  .extract({ left: 0, top: 0, width, height: Math.round(height * 0.62) })
  .png()
  .toBuffer();
const markTrimmed = await sharp(markRaw).trim({ threshold: 12 }).png().toBuffer();
const markMeta = await sharp(markTrimmed).metadata();
// A few percent of breathing room so the emblem never touches a favicon edge.
const pad = Math.round(Math.max(markMeta.width, markMeta.height) * 0.06);
const mark = await keyOutWhite(
  await sharp(markTrimmed)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: WHITE })
    .png()
    .toBuffer(),
);
await sharp(mark).resize(512, 512, { fit: 'contain', background: CLEAR }).toFile(asset('logo-mark.png'));

// 3. Favicons. The browser tab keeps transparency; the iOS home-screen icon must
//    be opaque or it renders on black.
await sharp(mark).resize(128, 128, { fit: 'contain', background: CLEAR }).toFile(out('favicon.png'));
await sharp(mark)
  .resize(156, 156, { fit: 'contain', background: CLEAR })
  .extend({ top: 12, bottom: 12, left: 12, right: 12, background: WHITE })
  .flatten({ background: WHITE })
  .toFile(out('apple-touch-icon.png'));

// 4. Social card: the lockup centred on a 1200x630 white field with real margin.
const cardLogo = await sharp(lockup)
  .resize({ height: 380, fit: 'inside', withoutEnlargement: true })
  .toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 3, background: WHITE },
})
  .composite([{ input: cardLogo, gravity: 'centre' }])
  .png()
  .toFile(out('og-image.png'));

console.log('images written to public/ and src/assets/generated/');
