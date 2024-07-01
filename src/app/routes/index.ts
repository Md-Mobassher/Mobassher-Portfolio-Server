import { Router } from 'express'
import { userRoutes } from '../modules/users/user.router'
import { AdminRoutes } from '../modules/admin/admin.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { skillRoutes } from '../modules/skills/skill.routes'
import { ProjectRoutes } from '../modules/projects/project.routes'
import { BlogRoutes } from '../modules/blog/blog.routes'
import { TestimonialRoutes } from '../modules/testimonial/testimonial.routes'
import { ContactRoutes } from '../modules/contact/contact.routes'

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
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/testimonials',
    route: TestimonialRoutes,
  },
  {
    path: '/contact',
    route: ContactRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
