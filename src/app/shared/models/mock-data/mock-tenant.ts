import { PhoneType } from '../../enum/phonetype'
import { Role } from '../../enum/role'
import { Tenant } from './../tenant'

export const TENANTS: Tenant[] = [
  {
    id: 1,
    name: { firstName: 'Ugo', surname: 'Fantozzi' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: 321456789 }],
    mail: 'rag-fantozzi@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'ragUgo',
    password: '4321',
    status: true,
    dateOfBirth: new Date(1960, 1, 1),
    role: Role.Tenant,
    address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  },
  {
    id: 2,
    name: { firstName: 'Gigi', surname: 'Filini' },
    phone: [{ id: 2, type: PhoneType.Mobile, digits: 355847229 }],
    mail: 'geom-filini@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'geomFilini',
    password: '1234',
    status: true,
    dateOfBirth: new Date(1960, 2, 2),
    role: Role.Tenant,
    address: { line1: 'Via Abruzzo', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  },
]
