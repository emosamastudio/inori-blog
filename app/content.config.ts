import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: ['*.md', '!_*.md'],
    base: './app/content/blog',
  }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      category: z.string().default('General'),
      readingTime: z.number().int().positive(),
      summary: z.string(),
    })
    .passthrough(),
});

const pages = defineCollection({
  loader: glob({
    pattern: ['*.md', '!_*.md'],
    base: './app/content/pages',
  }),
  schema: z
    .object({
      title: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { blog, pages };
