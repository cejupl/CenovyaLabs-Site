# Cenovya Labs - corporate site

The umbrella site for **Cenovya Labs LLC** at [cenovyalabs.com](https://cenovyalabs.com).
This is the entity layer only: who the company is, what it owns, how to reach it,
and its own legal pages. Product marketing lives on the product domains.

```
cenovyalabs.com    entity, this repo
├── nutovia.app        health label + app      (Nutovia-Site)
└── smartgamers.org    games label hub         (to be rebuilt)
    └── hoofandclaw.org    first title         (HoofAndClaw-Site)
```

Approved copy for every page is in [CONTENT_BRIEF.md](CONTENT_BRIEF.md). Edit the
brief and the site together so they don't drift.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> dist/
npm run preview    # serve the production build
```

Astro 5 + Tailwind v4, matching the Hoof & Claw site so there is one stack to
remember. Fully static - no adapter, no server, no dynamic routes.

## Layout

```
src/
  config.ts            THE ENTITY - legal name, state, emails, SEO defaults
  data/brands.ts       one entry per label + the contact routing table
  layouts/             Base.astro (SEO head, header, footer, reveal), Legal.astro
  components/          Header, Footer, ArrowLink
  pages/               index, about, contact, legal/privacy, legal/terms, 404
  styles/global.css    design tokens (@theme) + component classes
  assets/logo.jpeg     the logo master - replace this one file to rebrand
  assets/generated/    derived logo art (committed; regenerate with npm run images)
scripts/
  make-images.mjs      derives every logo asset from the master
public/                favicon, apple-touch-icon, og-image, robots.txt, _headers
```

## The two files that matter

Everything that would change in a re-organisation is isolated:

- **`src/config.ts`** - the legal name, formation state, domain, and contact
  addresses. If the LLC is renamed or re-domiciled, this is the only edit.
- **`src/data/brands.ts`** - one object per label. Spinning Nutovia out into its
  own LLC is deleting one object; adding a third label is adding one.

Smart Gamers currently points at `hoofandclaw.org` because smartgamers.org has
not been rebuilt yet. Swap that one `url` field when the hub goes live.

## Logo pipeline

`src/assets/logo.jpeg` is the master. `npm run images` derives everything else:

| Output | Used for |
|---|---|
| `src/assets/generated/logo-mark.png` | header emblem (transparent) |
| `src/assets/generated/logo-lockup.png` | full lockup on /about (transparent) |
| `public/favicon.png` | browser tab |
| `public/apple-touch-icon.png` | iOS home screen (opaque, per Apple) |
| `public/og-image.png` | 1200x630 social card |

The master is a JPEG whose white field is 253-255, so sharp's `unflatten()`
cannot lift it. The script keys the background out with a luminance-derived
alpha channel, which is why the mark can sit on any surface. Replace the master
and re-run to rebrand.

## Deploy - Cloudflare Pages

1. Push this folder to its own GitHub repo.
2. **Cloudflare → Workers & Pages → Create → Pages → Connect to Git.**
3. Build settings: framework **Astro**, build command `npm run build`, output
   directory `dist`. Leave the deploy command empty - no `wrangler.toml` here, so
   Pages publishes `dist` automatically.
4. **Custom domains:** add `cenovyalabs.com`. Then add `cenovya.com` to Cloudflare
   as a second zone and create a **Redirect Rule**: `cenovya.com/*` →
   `https://cenovyalabs.com/$1`, 301. Free, no origin needed.
5. **Analytics:** Pages project → **Analytics → Web Analytics → Enable**.
   Cloudflare injects the cookieless beacon at the edge; nothing goes in the
   source. The privacy policy already describes it, so enable it at launch or
   amend section 4 of `src/pages/legal/privacy.astro`.

## Notes

- **Fonts are self-hosted** (`@fontsource-variable/outfit` and `inter`) so the
  site makes zero third-party requests. The privacy policy claims no third-party
  trackers; Google Fonts would log visitor IPs and break that claim.
- **No Content-Security-Policy header** in `public/_headers`. The JSON-LD block
  and the edge-injected analytics beacon are both inline, so a strict CSP needs
  per-build hashes. The other hardening headers are set.
- **Nothing is sold here** and there is no email capture, which is what keeps the
  legal surface to two short pages.
