import { Role } from '../enum/role'
import { IUser, Name } from './users'

export class Tenant implements IUser {
  // tslint:disable-next-line: variable-name
  _id: number
  name: Name
  mail: string
  phone: string
  role: Role
  username: string
  password: string
  picture: string
  // listOfReservation: IReservation[]
  setRole(): void {
    this.role = Role.TENANT
  }
}
