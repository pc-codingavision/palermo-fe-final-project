import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Tenant implements IUser {
  id: number
  name: IName
  phone: string
  mail: string
  picture: string
  username: string
  password: string
  userStatus: boolean
  dateOfBirth: Date | null | string
  role: Role.Tenant
  address?: IAddress

  private constructor(user: Tenant) {
    this.id = user.id
    this.name = user.name
    this.phone = user.phone
    this.mail = user.mail
    this.picture = user.picture
    this.username = user.username
    this.password = user.password
    this.userStatus = user.userStatus
    this.dateOfBirth = user.dateOfBirth
    this.role = user.role
    this.address = user.address
  }

  static Build(tenant: Tenant): Tenant {
    return new this(tenant)
  }
}
