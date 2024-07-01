import { z } from 'zod'

export const createTestimonialSValidationschema = z.object({
  authorName: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  profileImg: z.string().optional(),
})

export const updateTestimonialSValidationschema = z.object({
  authorName: z.string().optional(),
  role: z.string().optional(),
  company: z.string().optional(),
  content: z.string().optional(),
  profileImg: z.string().optional(),
})
