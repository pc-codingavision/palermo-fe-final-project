import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'
export class Landlord implements IUser {
  constructor(
    public id = '',
    public name = { firstName: '', middleName: '', surname: '' } as IName,
    public phone = '',
    public mail = '',
    public picture = '',
    public username = '',
    public password = '',
    public userStatus = false,
    public dateOfBirth: Date | null = null,
    public role = Role.Landlord,
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    } as IAddress
  ) {}

  static Build(landlord: Landlord): Landlord {
    if (!landlord) {
      return new Landlord()
    }

    if (landlord.role !== Role.Landlord) {
      landlord.role = Role.Landlord
    }

    if (typeof landlord.dateOfBirth === 'string') {
      landlord.dateOfBirth = new Date(landlord.dateOfBirth)
    }
    return new Landlord(
      landlord.id,
      landlord.name,
      landlord.phone,
      landlord.mail,
      landlord.picture,
      landlord.username,
      landlord.password,
      landlord.userStatus,
      landlord.dateOfBirth,
      landlord.role,
      landlord.address
    )
  }

  public get fullName(): string {
    if (!this.name) {
      return ''
    }
    if (this.name.middleName) {
      return `${this.name.firstName} ${this.name.middleName} ${this.name.surname}`
    }
    return `${this.name.firstName} ${this.name.surname}`
  }
}
