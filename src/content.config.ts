import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.md",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      tags: z.array(z.string()).optional(),
      coverImage: image().optional(),
    }),
});

export const collections = {
  blog,
};
