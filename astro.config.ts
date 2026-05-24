import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  site: 'https://inori.emosamastudio.com',
  adapter: cloudflare()
});