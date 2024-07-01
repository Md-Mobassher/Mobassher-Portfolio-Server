import { z } from 'zod'

export const createSkillSValidationschema = z.object({
  name: z.string(),
  proficiencyLevel: z.string(),
  category: z.string(),
})

export const updateSkillSValidationschema = z.object({
  name: z.string().optional(),
  proficiencyLevel: z.string().optional(),
  category: z.string().optional(),
})
