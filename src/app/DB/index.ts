import config from '../config'
import { USER_ROLE } from '../modules/users/user.constant'
import { User } from '../modules/users/user.model'

const superUser = {
  name: config.super_admin.name,
  email: config.super_admin.email,
  contactNumber: config.super_admin.contactNumber,
  password: config.super_admin.password,
  role: USER_ROLE.super_admin,
  status: 'in-progress',
  isDeleted: false,
}

const seedsuper_admin = async () => {
  try {
    //when database is connected, we will check is there any user who is super admin
    const issuper_adminExits = await User.findOne({
      role: USER_ROLE.super_admin,
    })

    if (!issuper_adminExits) {
      await User.create(superUser)
    }
  } catch (error) {
    console.log(error || 'Cannot create super admin')
  }
}

export default seedsuper_admin
