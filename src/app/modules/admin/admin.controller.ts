import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AdminServices } from './admin.service'

const getStatistics = catchAsync(async (req, res) => {
  const result = await AdminServices.getStatistics()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Statistics is retrieved succesfully',
    data: result,
  })
})
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await AdminServices.getSingleUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const result = await AdminServices.getAllUsers(req.query)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users are retrieved succesfully',
    meta: result.meta,
    data: result.result,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await AdminServices.updateUser(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated succesfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await AdminServices.deleteUser(id)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is deleted succesfully',
    data: result,
  })
})

export const AdminControllers = {
  getStatistics,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
