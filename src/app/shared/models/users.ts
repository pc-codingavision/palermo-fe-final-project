import { PhoneType, Role } from '@shared/enum/enums'

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

export interface IPhone {
  id: number
  type: PhoneType
  digits: string
}

export interface IUser {
  id: number
  name: IName
  phone: IPhone[]
  mail: string
  picture: string
  username: string
  password: string
  status: boolean
  dateOfBirth: Date | null | string
  role: Role
  address?: IAddress
}

export class User implements IUser {
  constructor(
    // tslint:disable-next-line:variable-name
    public id = null,
    public name = { firstName: '', middleName: '', surname: '' } as IName,
    public phone = [] as IPhone[],
    public mail = '',
    public picture = '',
    public username = '',
    public password = '',
    public status = false,
    public dateOfBirth: Date | null = null,
    public role = Role.None,
    public address = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    } as IAddress
  ) {}

  static Build(user: IUser): User {
    if (!user) {
      return new User()
    }

    if (typeof user.dateOfBirth === 'string') {
      user.dateOfBirth = new Date(user.dateOfBirth)
    }

    return new User(
      user.id,
      user.name,
      user.phone,
      user.mail,
      user.picture,
      user.username,
      user.password,
      user.status,
      user.dateOfBirth,
      user.role as Role,
      user.address
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

  toJSON(): object {
    const serialized = Object.assign(this)
    delete serialized.id
    delete serialized.fullName
    return serialized
  }
}
