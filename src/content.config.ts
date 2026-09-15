import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { certImage } from "./data"

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    coverImage: z.string().optional(),
  }),
})

const certificates = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/certificates" }),
  schema: z.object({
    name: z.string(),
    provider: z.string(),
    image: z.string().transform(certImage),
    date: z.coerce.string(),
    link: z.string().url().optional(),
    pinned: z.boolean().optional(),
  }),
})

const legal = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { projects, legal, certificates }
