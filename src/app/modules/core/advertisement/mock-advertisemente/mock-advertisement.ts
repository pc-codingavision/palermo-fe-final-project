import { Category, PhoneType, Role, Status, Toilet } from '@shared/enum/enums'
import { IReviews } from '@shared/models/advertisement'
import { IProperty } from '@shared/models/property'
import { IUser } from '@shared/models/users'

export interface IMockAdvertisement {
  id: number
  landlord: IUser
  property: IProperty
  reviews: IReviews
  price: number
}

export class MockAdvertisement implements IMockAdvertisement {
  private constructor(
    public id = null,
    public landlord = null,
    public property = null,
    public reviews = null,
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
export const MOCKADVERTISEMENT_MOCK_DATA: MockAdvertisement[] = [
  {
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
        tenantId: 1,
        description: 'Fantastic vacation. Perfect house',
        vote: 4.5,
      },
      {
        title: 'Good',
        tenantId: 2,
        description: 'Nice house, very very clean',
        vote: 4,
      },
    ],
    price: 40,
  },
]
