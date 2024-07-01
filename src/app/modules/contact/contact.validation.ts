import { z } from 'zod'

export const createContactValidationschema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
})
