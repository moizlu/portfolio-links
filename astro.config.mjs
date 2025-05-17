// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()],

  redirects: {
    "/": "https://moiz.lu",
    "discord": "https://discord.com/users/607472928669302784",
    "github": "https://github.com/moizlu",
    "pixiv": "https://pixiv.me/moizlu",
    "x": "https://x.com/moizlu",
    "twitter": "https://x.com/moizlu",
    "youtube": "https://www.youtube.com/@moizlu",
    "instagram": "https://www.instagram.com/moizlu",
    "steam": "https://steamcommunity.com/id/moizlu/"
  }
});