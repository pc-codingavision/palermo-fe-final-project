import { Category, PhoneType, Role, Status, Toilet } from '@shared/enum/enums'
import { Landlord } from '@shared/models/landlord'
import { IProperty } from '@shared/models/property'
import { IName } from '@shared/models/users'
import * as _ from 'lodash'

export interface IMockTenant {
  id: number
  name: IName
}
export interface IMockReview {
  title: string
  tenant: IMockTenant
  description: string
  vote: number
  date: Date | string | null
}
export interface IMockAdvertisement {
  id: number
  landlord: Landlord
  property: IProperty
  reviews: IMockReview[]
  price: number
  score?: number
}

export class MockReview implements IMockReview {
  private constructor(
    public date: Date | null = null,
    public description: string = '',
    public tenant = null,
    public title = '',
    public vote: number = null
  ) {}

  static Build(mockReviews?: IMockReview): MockReview {
    if (typeof mockReviews.date === 'string') {
      mockReviews.date = new Date(mockReviews.date)
    }

    if (!mockReviews) {
      return new MockReview()
    }

    return new MockReview(
      mockReviews.date,
      mockReviews.description,
      mockReviews.tenant,
      mockReviews.title,
      mockReviews.vote
    )
  }
}

export class MockAdvertisement implements IMockAdvertisement {
  private constructor(
    public id = null,
    public landlord = null,
    public property = null,
    public reviews: MockReview[] = [],
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
      mockAdvertisement.reviews.map((review) => MockReview.Build(review)) as MockReview[],
      mockAdvertisement.price
    )
  }

  public get score(): number {
    return _.round(_.mean(this.reviews.map((rev) => rev.vote)))
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
      images: [
        {
          image:
            'https://www.wallpapers4u.org/wp-content/uploads/bedroom_bed_style_interior_39274_1920x1080.jpg',
          thumbImage:
            'https://www.wallpapers4u.org/wp-content/uploads/bedroom_bed_style_interior_39274_1920x1080.jpg',
          alt: 'Camera da letto',
        },
        {
          image: 'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg',
          thumbImage:
            'https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_960_720.jpg',
          alt: 'Camera da letto',
        },
      ],
      status: Status.Open,
    },
    reviews: [
      {
        title: 'Fantastic vacation 2',
        tenant: {
          id: 1,
          name: { firstName: 'Ugo', surname: 'Fantozzi' },
        },
        description:
          'La camera era calda , accogliente , pulita  e il letto molto comodo ! La colazione è ottima anche per chi ha problemi di intolleranza al lattosio come il mio ragazzo che ha preso una brioches vegana ai frutti di bosco e un cappuccino alla soya  molto buoni',
        vote: 4.5,
        date: new Date(2020, 10, 27),
      },
      {
        title: 'Good 4',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Nice house, very very clean',
        vote: 4,
        date: '2020-10-14',
      },
      {
        title: 'Good 3',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Nice house, very very clean',
        vote: 4,
        date: '2020-11-14',
      },
      {
        title: 'Good 1',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Nice house, very very clean',
        vote: 4,
        date: '2020-12-14',
      },
      {
        title: 'Good 5',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Nice house, very very clean',
        vote: 4,
        date: '2020-08-14',
      },
    ],
    price: 40,
  },
  {
    id: 2,
    landlord: {
      id: 2,
      name: { firstName: 'Cosimo', surname: 'Nigrelli' },
      phone: [{ id: 2, type: PhoneType.Home, digits: '213455' }],
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
    property: {
      id: 2,
      landlordId: 2,
      address: {
        line1: 'Via Roma',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      title: 'Splendido appartamento',
      category: Category.Apartment,
      rooms: [
        { name: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 },
        { name: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
        { name: 'room 3', beds: 1, toilet: Toilet.Outside, mq: 25 },
      ],
      numberOfToilet: 1,
      description:
        "Luminoso attico nel centro di Palermo, posizione ideale per tutte le principali attrazioni turistiche del Centro Storico antico (5 min a piedi dalla Cattedrale). Questo attico di design si trova all'ultimo 7 ° piano (con ascensore) e offre una vista mozzafiato sulle montagne circostanti e sul centro storico della città. Il parcheggio è gratuito nella strada sottostante.",
      facilities: {
        tv: true,
        wifi: true,
        breakfastIncluded: true,
        parking: false,
        kitchen: true,
        shower: true,
        bath: false,
      },
      images: [
        {
          image:
            'https://www.wallpapers4u.org/wp-content/uploads/bed_bedroom_chair_style_39759_1920x1080.jpg',
          thumbImage:
            'https://www.wallpapers4u.org/wp-content/uploads/bed_bedroom_chair_style_39759_1920x1080.jpg',
          alt: 'Camera da letto',
        },
      ],
      status: Status.Open,
    },
    reviews: [
      {
        title: 'Good',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Very spacious and accessible house',
        vote: 4.5,
        date: '2020-08-15',
      },
    ],
    price: 30,
  },
  {
    id: 3,
    landlord: {
      id: 3,
      name: { firstName: 'Vito', surname: 'Rizzo' },
      phone: [{ id: 3, type: PhoneType.Work, digits: '142354' }],
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
    property: {
      id: 3,
      landlordId: 2,
      address: {
        line1: 'Via Roma',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      title: 'Splendido attico con vista',
      category: Category.Apartment,
      rooms: [
        { name: 'room 1', beds: 1, toilet: Toilet.Outside, mq: 25 },
        { name: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
      ],
      numberOfToilet: 1,
      description:
        'Situata nel cuore del Centro Storico di Palermo, La Boucherie vi da il benvenuto in una delle città più belle della Sicilia. Bellissimo appartamento nel quartiere della Vucciria, vicino alle vie più centrali della città, la Boucherie è dotato di Wi-Fi senza limiti, aria condizionata, finestre in vetro-camera, cucina attrezzata, lavatrice e due balconi. Ben collegato. Pulito e tranquillo.',
      facilities: {
        tv: true,
        wifi: true,
        breakfastIncluded: true,
        parking: false,
        kitchen: true,
        shower: true,
        bath: true,
      },
      images: [
        {
          image:
            'https://www.wallpapers4u.org/wp-content/uploads/bed_paintings_furniture_interior_design_39698_1920x1080.jpg',
          thumbImage:
            'https://www.wallpapers4u.org/wp-content/uploads/bed_paintings_furniture_interior_design_39698_1920x1080.jpg',
          alt: 'Camera da letto',
        },
      ],
      status: Status.Open,
    },
    reviews: [
      {
        title: 'Not great',
        tenant: {
          id: 1,
          name: { firstName: 'Ugo', surname: 'Fantozzi' },
        },
        description: 'The hostel was very very chaotic',
        vote: 1.5,
        date: new Date(2020, 2, 21),
      },
      {
        title: 'Terrible',
        tenant: {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
        },
        description: 'Very busy and people without masks',
        vote: 2,
        date: new Date(2020, 9, 19),
      },
    ],
    price: 20,
  },
]
