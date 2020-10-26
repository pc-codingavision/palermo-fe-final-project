import { Property } from './../models/property'
import { Category } from '../enum/category'
import { Status } from '../enum/status'
import { Toilet } from '../enum/toilet'

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
    propertyTitle: 'Splendido monovano',
    category: Category.Apartment,
    rooms: [{ roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 }],
    numberOfToilet: 1,
    description: '',
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: false,
      parking: false,
      kitchen: true,
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
    propertyTitle: 'Splendido appartamento',
    category: Category.Apartment,
    rooms: [
      { roomName: 'room 1', beds: 1, toilet: Toilet.Inside, mq: 25 },
      { roomName: 'room 2', beds: 2, toilet: Toilet.Outside, mq: 25 },
      { roomName: 'room 3', beds: 1, toilet: Toilet.Outside, mq: 25 },
    ],
    numberOfToilet: 1,
    description: '',
    facilities: {
      tv: true,
      wifi: true,
      breakfastIncluded: false,
      parking: false,
      kitchen: true,
      shower: true,
      bath: false,
    },
    imagesPath: ['https://cf.bstatic.com/images/hotel/max1024x768/228/228549673.jpg'],
    status: Status.Open,
  },
]
