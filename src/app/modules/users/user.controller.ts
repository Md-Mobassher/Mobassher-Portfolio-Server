import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

const getMe = catchAsync(async (req, res) => {
  const { email, role } = req.user
  const result = await UserServices.getMe(email, role)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  })
})

const changeStatus = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.changeStatus(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Status is updated succesfully',
    data: result,
  })
})

const changeRole = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.changeRole(id, req.body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Role is updated succesfully',
    data: result,
  })
})

export const UserControllers = {
  getMe,
  changeStatus,
  changeRole,
}
