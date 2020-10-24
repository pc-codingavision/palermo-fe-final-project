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
    public role: Role.Landlord,
    public address?: IAddress
  ) {}

  static Build(landlord: Landlord): Landlord {
    if (typeof landlord.dateOfBirth === 'string') {
      landlord.dateOfBirth = new Date(landlord.dateOfBirth)
    }
    return new this(
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
