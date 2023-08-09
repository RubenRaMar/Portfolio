import { defineCollection, z } from "astro:content";

const imageStructure = z.object({
  src: z.string(),
  alt: z.string(),
  title: z.string().optional(),
});

const socialStructure = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.custom(),
});

const workCollection = defineCollection({
  type: "content",
  schema: z.object({
    links: z.array(socialStructure),
    title: z.string(),
    headerTitle: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(
      z.object({
        competency: z.string(),
      })
    ),
    dataAos: z.string(),
    headerImage: imageStructure,
    images: z.array(imageStructure).optional(),
  }),
});

export const collections = {
  work: workCollection,
};
