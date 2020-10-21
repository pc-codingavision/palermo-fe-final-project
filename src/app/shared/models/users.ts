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
export abstract class User {
  // readonly fullName?: string
  // mail: string
  // userStatus: boolean
  // phone: string
  // role: Role
  // username: string
  // password: string
  // picture: string
  // dateOfBirth: Date | null | string

  constructor(
    public _id: number,
    public name: IName,
    public address?: IAddress,
    public role = Role.None
  ) {}
  getFullName(): string {
    if (!this.name) {
      return ''
    }

    if (this.name.middleName) {
      return `${this.name.firstName} ${this.name.middleName} ${this.name.surname}`
    }

    return `${this.name.firstName} ${this.name.surname}`
  }
  getFullAdress(): string {
    if (!this.address) {
      return ''
    }

    if (this.address.line2) {
      return `${this.address.line1}, ${this.address.line2},  ${this.address.city}, ${this.address.state}, ${this.address.postCode}, `
    }

    return `${this.address.line1}, ${this.address.city}, ${this.address.state}, ${this.address.postCode}`
  }
}
