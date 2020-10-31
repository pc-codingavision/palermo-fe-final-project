import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Tenant implements IUser {
  private constructor(
    public id = null,
    public name = { firstName: '', middlename: '', surname: '' } as IName,
    public phone = [],
    public mail = '',
    public picture = '',
    public username = '',
    public password = '',
    public status = false,
    public dateOfBirth: Date | null = null,
    public role = Role.Tenant,
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    } as IAddress
  ) {}

  static Build(tenant: IUser): Tenant {
    if (!tenant) {
      return new Tenant()
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
      tenant.status,
      tenant.dateOfBirth,
      tenant.role,
      tenant.address
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
