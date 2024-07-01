import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import { BlogControllers } from './blog.controller'
import {
  createBlogValidationSchema,
  updateBlogValidationSchema,
} from './blog.validation'

const router = express.Router()

router.post(
  '/create',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(createBlogValidationSchema),
  BlogControllers.createBlog,
)

router.get('/', BlogControllers.getAllBlogs)

router.get('/:id', BlogControllers.getSingleBlog)

router.patch(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(updateBlogValidationSchema),
  BlogControllers.updateBlog,
)

router.delete(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  BlogControllers.deleteBlog,
)

export const BlogRoutes = router
