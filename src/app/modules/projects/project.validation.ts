import { z } from 'zod'

export const createProjectValidationSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.array(z.string()),
  technology: z.array(z.string()),
  image: z.object({
    cover: z.string().optional(),
    landing: z.string().optional(),
  }),
  liveUrl: z.string().url(),
  clientUrl: z.string(),
  serverUrl: z.string(),
})

export const updateProjectValidationSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  description: z.array(z.string()).optional(),
  technology: z.array(z.string()).optional(),
  image: z
    .object({
      cover: z.string().optional(),
      landing: z.string().optional(),
    })
    .optional(),
  liveUrl: z.string().url().optional(),
  clientUrl: z.string().url().optional(),
  serverUrl: z.string().url().optional(),
})
