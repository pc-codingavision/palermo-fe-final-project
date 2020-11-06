import { Category, PhoneType, Role, Status, Toilet } from '@shared/enum/enums'
import { IReviews } from '@shared/models/advertisement'
import { IProperty } from '@shared/models/property'

import { Landlord } from './../../../../shared/models/landlord'

export interface IMockAdvertisement {
  id: number
  landlord: Landlord
  property: IProperty
  reviews: IReviews[]
  price: number
}

export class MockAdvertisement implements IMockAdvertisement {
  private constructor(
    public id = null,
    public landlord = null,
    public property = null,
    public reviews = [],
    public price = null
  ) {}

  static Build(mockAdvertisement?: IMockAdvertisement): MockAdvertisement {
    if (!mockAdvertisement) {
      return new MockAdvertisement()
    }
    return new this(
      mockAdvertisement.id,
      mockAdvertisement.landlord,
      mockAdvertisement.property,
      mockAdvertisement.reviews,
      mockAdvertisement.price
    )
  }
}
export const MOCKADVERTISEMENT_MOCK_DATA: MockAdvertisement = {
  id: 1,
  landlord: [
    {
      id: 1,
      name: { firstName: 'Piero', surname: 'Cascio' },
      phone: [{ id: 1, type: PhoneType.Mobile, digits: '3454545' }],
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
  ],
  property: [
    {
      id: 1,
      landlordId: 1,
      address: {
        line1: 'Via Roma',
        city: 'Palermo',
        country: 'italia',
        postalCode: '90100',
      },
      title: 'Splendido monovano',
      category: Category.Apartment,
      rooms: [{ roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 }],
      numberOfToilet: 1,
      description:
        "Non si intrometta! No, aspetti, mi porga l'indice; ecco lo alzi così... guardi, guardi, guardi; lo vede il dito? Lo vede che stuzzica, che prematura anche. E lei.. cosa si sente? Professore, non le dico. Antani come trazione per due anche se fosse supercazzola bitumata, ha lo scappellamento a destra.",
      facilities: {
        tv: true,
        wifi: true,
        breakfastIncluded: false,
        parking: false,
        kitchen: false,
        shower: true,
        bath: false,
      },
      imagesPath: ['https://cf.bstatic.com/images/hotel/max1024x768/228/228549673.jpg'],
      status: Status.Open,
    },
  ],
  reviews: [
    {
      title: 'Fantastic vacation',
      tenant: {
        id: 1,
        name: { firstName: 'Ugo', surname: 'Fantozzi' },
        phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
        mail: 'rag-fantozzi@test.com',
        picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
        username: 'ragUgo',
        password: '4321',
        status: true,
        dateOfBirth: new Date(1960, 1, 1),
        role: Role.Tenant,
        address: {
          line1: 'Via Pina',
          city: 'Roma',
          state: 'Italia',
          postCode: '90000',
        },
        fullName: '',
      },
      description: 'Fantastic vacation. Perfect house',
      vote: 4.5,
    },
    {
      title: 'Good',
      tenant: {
        id: 2,
        name: { firstName: 'Gigi', surname: 'Filini' },
        phone: [
          { id: 1, type: PhoneType.Home, digits: '0900256248' },
          { id: 2, type: PhoneType.Mobile, digits: '355847229' },
        ],
        mail: 'geom-filini@test.com',
        picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
        username: 'geomFilini',
        password: '1234',
        status: true,
        dateOfBirth: new Date(1960, 2, 2),
        role: Role.Tenant,
        address: {
          line1: 'Via Abruzzo',
          city: 'Roma',
          state: 'Italia',
          postCode: '90000',
        },
        fullName: '',
      },
      description: 'Nice house, very very clean',
      vote: 4,
    },
  ],
  price: 40,
}
