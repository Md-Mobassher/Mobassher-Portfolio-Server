import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BlogServices } from './blog.service'

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlog(req.user, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is created succesfully',
    data: result,
  })
})

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogs()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs are retrieved succesfully',
    data: result,
  })
})
const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.getSingleBlog(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is retrieved succesfully',
    data: result,
  })
})
const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.updateBlog(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is updated succesfully',
    data: result,
  })
})

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BlogServices.deleteBlog(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog is deleted succesfully',
    data: result,
  })
})

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
}
