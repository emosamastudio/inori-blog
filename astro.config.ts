import sitemap, { type SitemapItem } from '@astrojs/sitemap';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import type { AstroUserConfig } from 'astro';
import { defineConfig } from 'astro/config';

type ShikiThemeObject = Exclude<
  NonNullable<NonNullable<AstroUserConfig['markdown']>['shikiConfig']>['theme'],
  string | undefined
>;

// Shiki theme tuned to the Inori palette in `globals.css`.
const inoriEditorialTheme: ShikiThemeObject = {
  name: 'inori-editorial',
  type: 'light',
  colors: {
    'editor.background': '#f4f1f8', // --bone
    'editor.foreground': '#15131c', // --ink
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#8b8698', fontStyle: 'italic' },
    },
    {
      scope: ['string', 'string.template', 'meta.string', 'string.quoted'],
      settings: { foreground: '#6a6490' }, // --olive
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character', 'constant.other.symbol'],
      settings: { foreground: '#c4a7d4' }, // --coral
    },
    {
      scope: ['keyword', 'keyword.control', 'keyword.operator.new', 'keyword.operator.expression', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#c4a7d4' },
    },
    {
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: '#15131c', fontStyle: 'bold' },
    },
    {
      scope: ['entity.name.class', 'entity.name.type', 'support.class', 'support.type'],
      settings: { foreground: '#15131c' },
    },
    {
      scope: ['variable', 'variable.parameter', 'support.variable'],
      settings: { foreground: '#2a262c' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
      settings: { foreground: '#5a5490' },
    },
    {
      scope: ['markup.heading', 'entity.name.section'],
      settings: { foreground: '#15131c', fontStyle: 'bold' },
    },
    { scope: 'markup.bold', settings: { fontStyle: 'bold' } },
    { scope: 'markup.italic', settings: { fontStyle: 'italic' } },
    { scope: ['markup.inline.raw', 'markup.fenced_code'], settings: { foreground: '#2a262c' } },
    { scope: ['variable.other.env', 'meta.environment-variable'], settings: { foreground: '#6a6490' } },
  ],
};

const site = process.env.INORI_SITE ?? 'https://inori.blog';

// Read blog post dates at config time so the sitemap can include lastmod.
const blogDir = join(import.meta.dirname, 'app/content/blog');
const blogDates = new Map<string, string>();
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md') || file.startsWith('_')) continue;
  const raw = readFileSync(join(blogDir, file), 'utf-8');
  const match = raw.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
  if (match) {
    const slug = file.replace(/\.md$/, '');
    blogDates.set(`/blog/${slug}/`, match[1]!);
  }
}

export default defineConfig({
  output: 'static',
  site,
  srcDir: './app',
  outDir: './out',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: {
      theme: inoriEditorialTheme,
      wrap: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og/'),
      serialize(item: SitemapItem) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'daily' as SitemapItem['changefreq'];
        } else if (path === '/blog/') {
          item.priority = 0.9;
          item.changefreq = 'weekly' as SitemapItem['changefreq'];
        } else if (path.startsWith('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly' as SitemapItem['changefreq'];
          const date = blogDates.get(path);
          if (date) item.lastmod = date;
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly' as SitemapItem['changefreq'];
        }
        return item;
      },
    }),
  ],
});
