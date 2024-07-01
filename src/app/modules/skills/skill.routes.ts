import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../users/user.constant'
import {
  createSkillSValidationschema,
  updateSkillSValidationschema,
} from './skill.validation'
import { SkillControllers } from './skill.controller'

const router = express.Router()

router.post(
  '/create',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(createSkillSValidationschema),
  SkillControllers.createSkill,
)

router.get('/', SkillControllers.getAllSkills)

router.patch(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  validateRequest(updateSkillSValidationschema),
  SkillControllers.updateSkill,
)

router.delete(
  '/:id',
  auth(USER_ROLE.super_admin, USER_ROLE.admin),
  SkillControllers.deleteSkill,
)

export const skillRoutes = router
