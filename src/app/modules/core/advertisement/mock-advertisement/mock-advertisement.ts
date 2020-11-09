import { Category, PhoneType, Role, Status, Toilet } from '@shared/enum/enums'
import { Landlord } from '@shared/models/landlord'
import { IProperty } from '@shared/models/property'
import { IName } from '@shared/models/users'

export interface IMockTenant {
  id: number
  name: IName
}
export interface IMockReview {
  title: string
  tenant: IMockTenant
  description: string
  vote: number
}
export interface IMockAdvertisement {
  id: number
  landlord: Landlord
  property: IProperty
  reviews: IMockReview[]
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
export const MOCKADVERTISEMENTS_MOCK_DATA: IMockAdvertisement[] = [
  {
    id: 1,
    landlord: {
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
    property: {
      id: 1,
      landlordId: 1,
      address: {
        line1: 'Via Roma',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      title: 'Splendido monovano',
      category: Category.Apartment,
      rooms: [{ name: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 }],
      numberOfToilet: 1,
      description:
        "Perfetto per immergersi a pieno nella vita dello storico e caratteristico Mercato del Capo. La palazzina si trova nel cuore della città antica, all'interno del Mercato; zona ben fornita di mezzi pubblici e servizi. L'edificio è composto da 4 appartamenti ciascuno dei quali è così suddiviso: ingresso, cucina abitabile totalmente arredata, camera da letto, bagno con doccia ed antibagno",
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
    reviews: [
      {
        title: 'Fantastic vacation',
        tenant: {
          id: 1,
          name: { firstName: 'Ugo', surname: 'Fantozzi' },
        },
        description: 'Fantastic vacation. Perfect house',
        vote: 4.5,
      },
      {
        title: 'Good',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Nice house, very very clean',
        vote: 4,
      },
    ],
    price: 40,
  },
]
