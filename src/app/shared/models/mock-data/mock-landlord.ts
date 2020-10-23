import { Role } from '../../enum/role'
import { Landlord } from '../landlord'

export const Landlords: Landlord[] = [
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
    role: Role.Landlord,
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
    role: Role.Landlord,
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
]
