import { Role } from '../enum/role'
import { IAddress, IName, User } from './users'

// tslint:disable-next-line: no-empty-interface
export interface IReservation {}

export class Tenant extends User {
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
    public reservation: IReservation[],
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
    this.role = Role.Tenant
  }
}
