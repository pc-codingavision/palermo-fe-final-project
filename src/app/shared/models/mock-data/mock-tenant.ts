import { Role } from '../../enum/role'
import { Tenant } from './../tenant'

export const TENANTS: Tenant[] = [
  {
    id: 1,
    name: { firstName: 'Ugo', surname: 'Fantozzi' },
    phone: '321 456 789',
    mail: 'rag-fantozzi@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'ragUgo',
    password: '4321',
    userStatus: true,
    dateOfBirth: '01/01/1960',
    role: Role.Tenant,
    address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
  },
  {
    id: 2,
    name: { firstName: 'Gigi', surname: 'Filini' },
    phone: '389 654 321',
    mail: 'geom-filini@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'geomFilini',
    password: '1234',
    userStatus: true,
    dateOfBirth: '02/02/1960',
    role: Role.Tenant,
    address: { line1: 'Via Abruzzo', city: 'Roma', state: 'Italia', postCode: '90000' },
  },
]
