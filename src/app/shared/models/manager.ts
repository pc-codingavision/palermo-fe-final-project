import { Role } from '@shared/enum/enums'
import { IAddress, IName, IPhone, IUser } from '@shared/models/users'

export class Manager implements IUser {
  private constructor(
    public id = null,
    public name = { firstName: '', middleName: '', surname: '' } as IName,
    public phone = [] as IPhone[],
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
