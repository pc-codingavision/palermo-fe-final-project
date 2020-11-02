import { Category, PhoneType, Role, Status, Toilet } from '@shared/enum/enums'
import { IAdvertisement } from '@shared/models/advertisement'
import { Landlord } from '@shared/models/landlord'
import { Manager } from '@shared/models/manager'
import { Property } from '@shared/models/property'
import { IReservation } from '@shared/models/reservation'
import { Tenant } from '@shared/models/tenant'

export const ADVERTISEMENTS_MOCK_DATA: IAdvertisement[] = [
  {
    id: 1,
    landlordId: 1,
    propertyId: 1,
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
  {
    id: 2,
    landlordId: 2,
    propertyId: 2,
    reviews: [
      {
        title: 'Good',
        tenantId: 2,
        description: 'Very spacious and accessible house',
        vote: 4.5,
      },
    ],
    price: 30,
  },
  {
    id: 3,
    landlordId: 3,
    propertyId: 3,
    reviews: [
      {
        title: 'Not great',
        tenantId: 1,
        description: 'The hostel was very very chaotic',
        vote: 1.5,
      },
      {
        title: 'Terrible',
        tenantId: 2,
        description: 'Very busy and people without masks',
        vote: 2,
      },
    ],
    price: 20,
  },
]
export const LANDLORDS_MOCK_DATA: Landlord[] = [
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
  {
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
  {
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
]
export const MANAGERS_MOCK_DATA: Manager[] = [
  {
    id: 1,
    name: { firstName: 'Piero', surname: 'Cascio' },
    phone: [
      {
        id: 1,
        type: PhoneType.Home,
        digits: '0911113333',
      },
      {
        id: 2,
        type: PhoneType.Mobile,
        digits: '3333333333',
      },
      {
        id: 3,
        type: PhoneType.Work,
        digits: '3216549871',
      },
    ],
    mail: 'piero-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager1',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1990, 10, 20),
    role: Role.Manager,
    fullName: '',
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 2,
    name: { firstName: 'Cosimo', surname: 'Nigrelli' },
    phone: [
      {
        id: 1,
        type: PhoneType.Work,
        digits: '3216549871',
      },
      {
        id: 2,
        type: PhoneType.Mobile,
        digits: '369258147',
      },
    ],
    mail: 'cosimo-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager2',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1980, 5, 10),
    role: Role.Manager,
    fullName: '',
    address: { line1: 'Via Roma', city: 'Palermo', state: 'italia', postCode: '90100' },
  },
  {
    id: 3,
    name: { firstName: 'Mario', surname: 'Rossi' },
    phone: [
      {
        id: 1,
        type: PhoneType.Mobile,
        digits: '3571594862',
      },
    ],
    mail: 'mario-manager@test.com',
    picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    username: 'manager3',
    password: 'password',
    status: true,
    dateOfBirth: new Date(1992, 2, 15),
    role: Role.Manager,
    fullName: '',
    address: {
      line1: 'Via della Libertà',
      city: 'Palermo',
      state: 'italia',
      postCode: '90100',
    },
  },
]
export const PROPERTIES_MOCK_DATA: Property[] = [
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
  {
    id: 2,
    landlordId: 2,
    address: {
      line1: 'Via Roma',
      city: 'Palermo',
      country: 'italia',
      postalCode: '90100',
    },
    title: 'Splendido appartamento',
    category: Category.Apartment,
    rooms: [
      { roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 },
      { roomName: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
      { roomName: 'room 3', beds: 1, toilet: Toilet.Outside, mq: 25 },
    ],
    numberOfToilet: 1,
    description:
      'Si, ma la sbiriguda della sbrindellona come se fosse antani come faceva? Prego? Ho provato con la supercazzola con scappelamento paraplegico a sinistra, ma non funzionava. E lei.. cosa si sente? Professore, non le dico.',
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: false,
      kitchen: true,
      shower: true,
      bath: false,
    },
    imagesPath: ['https://cf.bstatic.com/images/hotel/max1024x768/228/228549673.jpg'],
    status: Status.Open,
  },
  {
    id: 3,
    landlordId: 2,
    address: {
      line1: 'Via Roma',
      city: 'Palermo',
      country: 'italia',
      postalCode: '90100',
    },
    title: 'Splendido attico con vista',
    category: Category.Apartment,
    rooms: [
      { roomName: 'room 1', beds: 1, toilet: Toilet.Outside, mq: 25 },
      { roomName: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
    ],
    numberOfToilet: 1,
    description:
      "Antani come trazione per due anche se fosse supercazzola bitumata, ha lo scappellamento a destra. Guardi, le ho ritagliato quell'articolo sul Casentino. Ma lei se la blinda la supercazzola prematurata come se fosse anche un po' di Casentino che perdura anche come cappotto;",
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: true,
      kitchen: true,
      shower: true,
      bath: true,
    },
    imagesPath: [
      'https://www.grossoandpartners.com/docs/immobili/1925/foto/A126-Attici-Mansarde-Treviso-Treviso-77491.jpeg',
    ],
    status: Status.Open,
  },
]
export const RESERVATIONS_MOCK_DATA: IReservation[] = [
  {
    id: 1,
    tenantId: 1,
    propertyId: 1,
    guestNumber: 3,
    checkIn: '24/10/2020',
    checkOut: '30/10/2020',
    specialRequest: '',
  },
  {
    id: 2,
    tenantId: 2,
    propertyId: 2,
    guestNumber: 3,
    checkIn: '26/11/2020',
    checkOut: '30/11/2020',
    specialRequest: 'I would like to do the check-in in early morning.',
  },
]
export const TENANTS_MOCK_DATA: Tenant[] = [
  {
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
    address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  },
  {
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
    address: { line1: 'Via Abruzzo', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  },
]
