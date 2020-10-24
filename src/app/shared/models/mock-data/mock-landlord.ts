import { Role } from '../../enum/role'
import { Landlord } from '../landlord'

export const LANDLORDS: Landlord[] = [
  {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: '333 3333 333',
    mail: 'piero-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord1',
    password: 'password',
    userStatus: true,
    dateOfBirth: '10/10/1980',
    role: Role.Landlord,
    address: {
      line1: 'Via delle Magnolie',
      city: 'Palermo',
      state: 'italia',
      postCode: '90100',
    },
  },
  {
    id: 2,
    name: { firstName: 'Cosimo', surname: 'Nigrelli' },
    phone: '333 3333 332',
    mail: 'cosimo-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord2',
    password: 'password',
    userStatus: true,
    dateOfBirth: '10/10/1982',
    role: Role.Landlord,
    address: { line1: 'Via Roma', city: 'Messina', state: 'italia', postCode: '90100' },
  },
  {
    id: 3,
    name: { firstName: 'Vito', surname: 'Rizzo' },
    phone: '3468769876',
    mail: 'vito-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord3',
    password: 'password',
    userStatus: true,
    dateOfBirth: '10/10/1984',
    role: Role.Landlord,
    address: {
      line1: 'Via dei Cappuccini',
      city: 'Ragusa',
      state: 'italia',
      postCode: '90100',
    },
  },
]
