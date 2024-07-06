import { JwtPayload } from 'jsonwebtoken'
import { IBlog } from './blog.interface'
import { Blog } from './blog.model'
import { User } from '../users/user.model'
import { USER_ROLE } from '../users/user.constant'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'

const createBlog = async (user: JwtPayload, payload: Partial<IBlog>) => {
  const userInfo = await User.isUserExistsByEmail(user.email)
  if (!userInfo) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found')
  }
  payload.author = userInfo?._id

  if (userInfo?.role === USER_ROLE.super_admin || USER_ROLE.admin) {
    payload.blogStatus = 'published'
  }
  const result = await Blog.create(payload)
  return result
}

const getAllBlogs = async () => {
  const result = await Blog.find().populate('author')

  return result
}

const getSingleBlog = async (id: string) => {
  const result = await Blog.findById(id).populate('author')
  return result
}

const updateBlog = async (id: string, payload: Partial<IBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteBlog = async (id: string) => {
  await Blog.findByIdAndDelete(id)
  return null
}

export const BlogServices = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
