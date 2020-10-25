import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Landlord implements IUser {
  private constructor(
    public id: number,
    public name: IName,
    public phone: string,
    public mail: string,
    public picture: string,
    public username: string,
    public password: string,
    public userStatus: boolean,
    public dateOfBirth: Date | null | string,
    public role: Role,
    public address?: IAddress
  ) {}

  static Build(landlord: Landlord): Landlord {
    if (!landlord) {
      throw new Error('Insert a valid value')
    }
    if (typeof landlord.dateOfBirth === 'string') {
      landlord.dateOfBirth = new Date(landlord.dateOfBirth)
    }
    if (landlord.role !== 'landlord') {
      throw new Error('Role must be Landlord')
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
}
