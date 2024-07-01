import { z } from 'zod'
import { UserStatus } from './user.constant'

const signupValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'name can not be les than 3 characters' })
    .max(40, { message: 'Name can not be more than 40 characters' }),
  email: z.string({ required_error: 'Email is required.' }).email(),
  contactNumber: z.string({ required_error: ' Contact Number is requried.' }),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' }),
})

const updateUserValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'name can not be les than 3 characters' })
    .max(40, { message: 'Name can not be more than 40 characters' })
    .optional(),
  email: z.string().email().optional(),
  contactNumber: z.string().optional(),
  bio: z.string().optional(),
  profilePicture: z.string().url().optional(),
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20 characters' })
    .optional(),
})

const changeStatusValidationSchema = z.object({
  status: z.enum([...UserStatus] as [string, ...string[]]),
})

const changeRoleValidationSchema = z.object({
  role: z.enum(['admin', 'user']),
})

export const UserValidation = {
  signupValidationSchema,
  updateUserValidationSchema,
  changeStatusValidationSchema,
  changeRoleValidationSchema,
}
