import { Role } from '../enum/role'
import { IAddress, IName, User } from './users'

export class Manager extends User {
  constructor(
    id: number,
    name: IName,
    phone: string,
    mail: string,
    picture: string,
    username: string,
    password: string,
    userStatus: boolean,
    dateOfBirth: Date | null | string,
    address?: IAddress
  ) {
    super(
      id,
      name,
      phone,
      mail,
      picture,
      username,
      password,
      userStatus,
      dateOfBirth,
      address
    )
    this.role = Role.Manager
  }
}
