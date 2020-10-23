import { Category } from './../enum/category'

export interface IFacilities {
  tv: boolean
  wifi: boolean
  breakfastIncluded: boolean
  parking: boolean
  kitchen: boolean
  shower: boolean
  bath: boolean
}

export interface IAddress {
  line1: string
  line2?: string
  city: string
  postalCode: number | string
  country: string
}

export interface ILandlordName {
  first: string
  middle?: string
  last: string
}

export enum Toilet {
  Inside = 'inside',
  Outside = 'outside',
  Shared = 'shared',
  None = 'none',
}

export enum Status {
  Open = 'open',
  Closed = 'closed',
}

export interface IProperty {
  id: number
  landlordId: number
  address: IAddress
  propertyTitle: string
  category: Category
  rooms: [
    { roomName: string; beds: number; numberOfToilet: number; toilet: Toilet; mq: number }
  ]

  description: string
  facilities: IFacilities
  imagesPath: string[]
  status: Status
}

export class Property implements IProperty {
  constructor(
    public id,
    public landlordId: 0,
    public address = {
      line1: '',
      line2: '',
      city: '',
      postalCode: '',
      country: '',
    } as IAddress,
    public propertyTitle = '',
    public category = Category.None,
    public rooms: [
      { roomName: ''; beds: 0; numberOfToilet: 0; toilet: Toilet.None; mq: 0 }
    ],

    public description = '',
    public facilities = {
      tv: false,
      wifi: false,
      breakfastIncluded: false,
      parking: false,
      kitchen: false,
      shower: false,
      bath: false,
    } as IFacilities,
    public imagesPath = [],
    public status = Status.Open
  ) {}
}
