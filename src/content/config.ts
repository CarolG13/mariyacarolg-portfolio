// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string(),
  }),
});

// NEW BLOG COLLECTION
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
  }),
});

export const collections = {
  'projects': projectsCollection,
  'blog': blogCollection, // <-- ADD THIS
};
