import { z } from 'zod'

export const createBlogValidationSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  coverImage: z.string(),
  category: z.string(),
})

export const updateBlogValidationSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  tags: z.array(z.string()).optional(),
  coverImage: z.string().optional(),
  category: z.string().optional(),
})

export const createCommentValidationSchema = z.object({
  content: z.string(),
})

export const updateCommentValidationSchema = z.object({
  content: z.string().optional(),
})
