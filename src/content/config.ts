import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    readingTime: z.number(),
    summary: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };
