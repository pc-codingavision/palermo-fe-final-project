import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Manager implements IUser {
  private constructor(
    public id = null,
    public name = { firstName: '', middleName: '', surname: '' } as IName,
    public phone = [],
    public mail = '',
    public picture = '',
    public username = '',
    public password = '',
    public status = false,
    public dateOfBirth: Date | null = null,
    public role = Role.Manager,
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    } as IAddress
  ) {}

  static Build(manager: IUser): Manager {
    if (!manager) {
      return new Manager()
    }

    if (typeof manager.dateOfBirth === 'string') {
      manager.dateOfBirth = new Date(manager.dateOfBirth)
    }

    return new this(
      manager.id,
      manager.name,
      manager.phone,
      manager.mail,
      manager.picture,
      manager.username,
      manager.password,
      manager.status,
      manager.dateOfBirth,
      manager.role,
      manager.address
    )
  }
}
