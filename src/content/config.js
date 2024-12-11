import { defineCollection, z } from "astro:content";

const portfolioCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
		links: z
			.object({
				github: z.string(),
				preview: z.string().optional(),
			})
			.optional(),
		gallery: z.array(
			z.object({
				file: z.string(),
				alt: z.string(),
			})
		).optional(),
	}),
});

export const collections = {
	portfolio: portfolioCollection,
};