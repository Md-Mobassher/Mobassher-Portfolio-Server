/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'
import { USER_ROLE } from './user.constant'

export interface IUser {
  name: string
  email: string
  password: string
  passwordChangedAt?: Date
  contactNumber: string
  role: 'super_admin' | 'admin' | 'user'
  status: 'in-progress' | 'blocked'
  isDeleted: boolean
  bio?: 'string'
  profilePicture?: 'string'
}

export interface UserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<IUser | null>

  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean
}

export type TUserRole = keyof typeof USER_ROLE
