import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().optional().default(false),
    legacySlug: z.string()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    permalink: z.string(),
    heroImage: z.string().optional(),
    heroCaption: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
    excerpt: z.string().optional(),
    bilibiliVideoId: z.string().optional()
  })
});

export const collections = { blog, pages };
