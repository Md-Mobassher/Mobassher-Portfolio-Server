import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import { ProjectControllers } from './project.controller'
import {
  createProjectValidationSchema,
  updateProjectValidationSchema,
} from './project.validation'

const router = express.Router()

router.post(
  '/create',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(createProjectValidationSchema),
  ProjectControllers.createProject,
)

router.get('/', ProjectControllers.getAllProjects)

router.get('/:id', ProjectControllers.getSingleProject)

router.patch(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(updateProjectValidationSchema),
  ProjectControllers.updateProject,
)

router.delete(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  ProjectControllers.deleteProject,
)

export const ProjectRoutes = router
