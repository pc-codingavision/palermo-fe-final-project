import { PhoneType } from '../../enum/phonetype'
import { Role } from '../../enum/role'
import { Landlord } from '../landlord'

export const LANDLORDS: Landlord[] = [
  {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: 3454545 }],
    mail: 'piero-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord1',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1980, 10, 10),
    role: Role.Landlord,
    address: {
      line1: 'Via delle Magnolie',
      city: 'Palermo',
      state: 'italia',
      postCode: '90100',
    },
    fullName: '',
  },
  {
    id: 2,
    name: { firstName: 'Cosimo', surname: 'Nigrelli' },
    phone: [{ id: 2, type: PhoneType.Home, digits: 213455 }],
    mail: 'cosimo-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord2',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1982, 10, 10),
    role: Role.Landlord,
    address: {
      line1: 'Via Roma',
      city: 'Messina',
      state: 'italia',
      postCode: '90100',
    },
    fullName: '',
  },
  {
    id: 3,
    name: { firstName: 'Vito', surname: 'Rizzo' },
    phone: [{ id: 3, type: PhoneType.Work, digits: 142354 }],
    mail: 'vito-landlord@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'landlord3',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1984, 10, 1),
    role: Role.Landlord,
    address: {
      line1: 'Via dei Cappuccini',
      city: 'Ragusa',
      state: 'italia',
      postCode: '90100',
    },
    fullName: '',
  },
]