import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Landlord implements IUser {
  id: number
  name: IName
  phone: string
  mail: string
  picture: string
  username: string
  password: string
  userStatus: boolean
  dateOfBirth: string | Date
  role: Role
  address?: IAddress

  private constructor(user: Landlord) {
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
  static Build(landLord: Landlord): Landlord {
    return new this(landLord)
  }
}
