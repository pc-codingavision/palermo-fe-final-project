import { Role } from './../enum/role'
import { PhoneType } from '../enum/phonetype'

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

export interface IPhone {
  id: number
  type: PhoneType
  digits: string
}

export interface IUser {
  id: number
  name: IName
  phone: IPhone[]
  mail: string
  picture: string
  username: string
  password: string
  status: boolean
  dateOfBirth: Date | null | string
  role: Role
  address: IAddress
  readonly fullName?: string
}
