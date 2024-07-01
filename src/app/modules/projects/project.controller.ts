import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProjectServices } from './project.service'

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is created succesfully',
    data: result,
  })
})

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects are retrieved succesfully',
    data: result,
  })
})
const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectServices.getSingleProject(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is retrieved succesfully',
    data: result,
  })
})
const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectServices.updateProject(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is updated succesfully',
    data: result,
  })
})

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await ProjectServices.deleteProject(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is deleted succesfully',
    data: result,
  })
})

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
}
