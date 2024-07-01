import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import {
  createTestimonialSValidationschema,
  updateTestimonialSValidationschema,
} from './testimonial.validation'
import { TestimonialControllers } from './testimonial.controller'

const router = express.Router()

router.post(
  '/create',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(createTestimonialSValidationschema),
  TestimonialControllers.createTestimonial,
)

router.get('/', TestimonialControllers.getAllTestimonials)

router.patch(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(updateTestimonialSValidationschema),
  TestimonialControllers.updateTestimonial,
)

router.delete(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  TestimonialControllers.deleteTestimonial,
)

export const TestimonialRoutes = router
