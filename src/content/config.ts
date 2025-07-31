// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  // This is the "schema" - the rules for your project data
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};