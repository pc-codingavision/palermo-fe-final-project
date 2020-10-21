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
  role: Role
  constructor(
    public id: number,
    public name: IName,
    public phone: string,
    public mail: string,
    public picture: string,
    public username: string,
    public password: string,
    public userStatus: boolean,
    public dateOfBirth: Date | null | string,
    public address?: IAddress
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
  getFullAddress(): string {
    if (!this.address) {
      return ''
    }

    if (this.address.line2) {
      return `${this.address.line1}, ${this.address.line2},  ${this.address.city}, ${this.address.state}, ${this.address.postCode}, `
    }

    return `${this.address.line1}, ${this.address.city}, ${this.address.state}, ${this.address.postCode}`
  }
}
