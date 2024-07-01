import httpStatus from 'http-status'
import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { User } from '../users/user.model'
import { IUser } from '../users/user.interface'
import { Project } from '../projects/project.model'
import { Blog } from '../blog/blog.model'
import { Testimonial } from '../testimonial/testimonial.model'
import { Contact } from '../contact/contact.model'

const getStatistics = async () => {
  const totalUsers = await User.countDocuments()
  const totalProjects = await Project.countDocuments()
  const totalBlogPosts = await Blog.countDocuments()
  const totalTestimonials = await Testimonial.countDocuments()
  const totalMessages = await Contact.countDocuments()

  const result = {
    totalUsers,
    totalProjects,
    totalBlogPosts,
    totalTestimonials,
    totalMessages,
  }
  return result
}

const getAllUsers = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await userQuery.modelQuery
  const meta = await userQuery.countTotal()
  return {
    meta,
    result,
  }
}

const getSingleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}

const updateUser = async (id: string, payload: Partial<IUser>) => {
  const isUserExist = await User.findById(id)
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
  }

  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteUser = async (id: string) => {
  const isUserExist = await User.findById(id)
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
  }

  await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    },
  )
  return null
}

export const AdminServices = {
  getStatistics,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
