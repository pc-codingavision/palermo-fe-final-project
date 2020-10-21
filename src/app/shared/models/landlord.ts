import { Role } from '../enum/role'
import { IAddress, IName, User } from './users'

export interface IProperty {}

export class Landlord extends User {
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
    public properties: IProperty[],
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
    this.role = Role.Landlord
  }
}
