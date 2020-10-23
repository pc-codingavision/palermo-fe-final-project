import { Role } from './../enum/role'

export interface IName {
  firstName: string
  middleName?: string
  surname: string
}
export interface IAddress {
  line1: string
  line2?: string
  city: string
  state: string
  postCode: string
}
export interface IUser {
  id: number
  name: IName
  phone: string
  mail: string
  picture: string
  username: string
  password: string
  userStatus: boolean
  dateOfBirth: Date | null | string
  role: Role
  address?: IAddress
}
