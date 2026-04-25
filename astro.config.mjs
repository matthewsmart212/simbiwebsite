// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // "compile" bakes <Image /> into static /_astro/* at build time. Default "cloudflare-binding"
  // emits /_image?... URLs that need a Worker image route (404 on static Pages assets-only deploys).
  adapter: cloudflare({ imageService: "compile" }),
});