import { Category } from '../../enum/category'
import { Status } from '../../enum/status'
import { Toilet } from '../../enum/toilet'
import { Property } from '../property'

export const PROPERTY: Property[] = [
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
