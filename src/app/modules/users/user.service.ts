import { USER_ROLE } from './user.constant'
import { User } from './user.model'

const getMe = async (email: string, role: string) => {
  let result = null
  if (role === USER_ROLE.user) {
    result = await User.findOne({ email: email }).select({
      _id: true,
      name: true,
      email: true,
      contactNumber: true,
      role: true,
      status: true,
    })
  }
  if (role === USER_ROLE.admin) {
    result = await User.findOne({ email: email }).select({
      _id: true,
      name: true,
      email: true,
      contactNumber: true,
      role: true,
      status: true,
    })
  }
  if (role === USER_ROLE.super_admin) {
    result = await User.findOne({ email: email })
  }

  return result
}

const changeStatus = async (id: string, payload: { status: string }) => {
  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  })
  return result
}

export const UserServices = {
  getMe,
  changeStatus,
}
