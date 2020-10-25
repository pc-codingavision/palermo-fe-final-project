import { Role } from '../enum/role'
import { IAddress, IName, IUser } from './users'

export class Manager implements IUser {
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

  static Build(manager: Manager): Manager {
    if (!manager) {
      throw new Error('Insert a valid value')
    }

    if (typeof manager.dateOfBirth === 'string') {
      manager.dateOfBirth = new Date(manager.dateOfBirth)
    }

    if (manager.role !== 'manager') {
      throw new Error('Role must be Manager')
    }

    return new this(
      manager.id,
      manager.name,
      manager.phone,
      manager.mail,
      manager.picture,
      manager.username,
      manager.password,
      manager.userStatus,
      manager.dateOfBirth,
      manager.role,
      manager.address
    )
  }
}
