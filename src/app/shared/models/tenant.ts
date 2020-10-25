import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Tenant implements IUser {
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

  static Build(tenant: Tenant): Tenant {
    if (!tenant) {
      throw new Error('Insert a valid value')
    }
    if (tenant.role !== 'tenant') {
      throw new Error('Role must be Tenant')
    }
    if (typeof tenant.dateOfBirth === 'string') {
      tenant.dateOfBirth = new Date(tenant.dateOfBirth)
    }

    return new this(
      tenant.id,
      tenant.name,
      tenant.phone,
      tenant.mail,
      tenant.picture,
      tenant.username,
      tenant.password,
      tenant.userStatus,
      tenant.dateOfBirth,
      tenant.role,
      tenant.address
    )
  }
}
