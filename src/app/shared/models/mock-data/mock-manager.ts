import { PhoneType } from './../../enum/phonetype'
import { Role } from '../../enum/role'
import { Manager } from './../manager'

export const MANAGERS: Manager[] = [
  {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: [
      {
        id: 1,
        type: PhoneType.Home,
        digits: 0911113333,
      },
      {
        id: 2,
        type: PhoneType.Mobile,
        digits: 3333333333,
      },
      {
        id: 3,
        type: PhoneType.Work,
        digits: 3216549871,
      },
    ],
    mail: 'piero-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager1',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1990, 10, 20),
    role: Role.Manager,
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 2,
    name: { firstName: 'Cosimo', surname: 'Nigrelli' },
    phone: [
      {
        id: 1,
        type: PhoneType.Work,
        digits: 3216549871,
      },
      {
        id: 2,
        type: PhoneType.Mobile,
        digits: 369258147,
      },
    ],
    mail: 'cosimo-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager2',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1980, 5, 10),
    role: Role.Manager,
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 3,
    name: { firstName: 'Mario', surname: 'Rossi' },
    phone: [
      {
        id: 1,
        type: PhoneType.Mobile,
        digits: 3571594862,
      },
    ],
    mail: 'mario-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager3',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1992, 2, 15),
    role: Role.Manager,
    address: {
      line1: 'Via della Libertà',
      city: 'Palermo',
      state: 'italia',
      postCode: '90100',
    },
  },
]
