// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical domain (drives SEO tags + sitemap). cenovya.com 301s here at the
// Cloudflare edge, so it never appears in markup.
const SITE = 'https://cenovyalabs.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Fully static. Unlike the Hoof & Claw site there is no dynamic route here,
  // so no adapter is needed - Cloudflare Pages serves `dist/` directly.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
