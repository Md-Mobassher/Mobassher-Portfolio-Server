import { Router } from 'express'
import { userRoutes } from '../modules/users/user.router'
import { AdminRoutes } from '../modules/admin/admin.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { skillRoutes } from '../modules/skills/skill.routes'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/skills',
    route: skillRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
