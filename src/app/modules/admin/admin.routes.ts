import express from 'express'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { AdminControllers } from './admin.controller'

import { USER_ROLE } from '../users/user.constant'
import { UserValidation } from '../users/user.validation'

const router = express.Router()

router.get(
  '/users',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  AdminControllers.getAllUsers,
)

router.get(
  '/users/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  AdminControllers.getSingleUser,
)

router.patch(
  '/users/:id',
  auth(USER_ROLE.super_admin),
  validateRequest(UserValidation.updateUserValidationSchema),
  AdminControllers.updateUser,
)

router.delete(
  '/users/:id',
  auth(USER_ROLE.super_admin),
  AdminControllers.deleteUser,
)

export const AdminRoutes = router
