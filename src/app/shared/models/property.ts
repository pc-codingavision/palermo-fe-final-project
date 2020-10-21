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

export enum Category {
  Singleroom = 'singleroom',
  Apartment = 'apartment',
  None = 'none',
}

export interface IProperty {
  id: number
  landlordName: ILandlordName
  address: IAddress
  propertyName: string
  category: Category
  rooms: number
  beds: number
  mq: number
  description: string
  facilities: IFacilities
  toilet: Toilet
  numberOfToilet: number
  imagePath: string[]
  isAvailable: boolean
  review: string
  vote: number
}

export class Property implements IProperty {
  constructor(
    public id,
    public address = {
      line1: '',
      line2: '',
      city: '',
      postalCode: '',
      country: '',
    } as IAddress,
    public propertyName = '',
    public landlordName = { first: '', middle: '', last: '' } as ILandlordName,
    public category = Category.None,
    public rooms = 0,
    public beds = 0,
    public mq = 0,
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
    public toilet = Toilet.None,
    public numberOfToilet = 0,
    public imagePath = [],
    public isAvailable = true,
    public review = '',
    public vote = 0
  ) {}
}
