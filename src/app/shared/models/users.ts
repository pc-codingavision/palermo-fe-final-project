import { Role } from '../enum/role'

export abstract class Name {
  firstName: string
  middleName?: string
  surname: string

  getFullName(): string {
    return `${this.firstName} ${this.surname}`
  }
}

export interface IUser {
  _id: number
  name: Name
  mail: string
  phone: string
  role: Role
  username: string
  password: string
  picture: string

  setRole(): void
}

export abstract class Address {
  line1: string
  line2?: string
  city: string
  state: string
  postCode: string

  getFullAddress(): string {
    return `${this.line1}, ${this.city}, ${this.state}, ${this.postCode}`
  }
}
