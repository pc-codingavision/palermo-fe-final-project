import { Role } from '../../enum/role'
import { Manager } from './../manager'

export const MANAGERS: Manager[] = [
  {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: '333 3333 333',
    mail: 'piero-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager1',
    password: 'password',
    userStatus: true,
    dateOfBirth: '10/10/1980',
    role: Role.Manager,
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 2,
    name: { firstName: 'Cosimo', surname: 'Nigrelli' },
    phone: '333 3333 332',
    mail: 'cosimo-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager2',
    password: 'password',
    userStatus: true,
    dateOfBirth: '10/10/1982',
    role: Role.Manager,
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 3,
    name: { firstName: 'Mario', surname: 'Rossi' },
    phone: '333 3333 331',
    mail: 'mario-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager3',
    password: 'password',
    userStatus: true,
    dateOfBirth: '14/12/1995',
    role: Role.Manager,
    address: {
      line1: 'Via della Libertà',
      city: 'Palermo',
      state: 'italia',
      postCode: '90100',
    },
  },
]
