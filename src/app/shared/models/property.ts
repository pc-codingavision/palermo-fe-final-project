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

export interface IFacilities {
  tv: boolean
  wifi: boolean
  breakfastIncluded: boolean
  parking: boolean
  kitchen: boolean
  shower: boolean
  bath: boolean
}

export enum Toilet {
  INSIDE,
  OUTSIDE,
  SHARED,
}

export enum Category {
  SINGLEROOM,
  APARTMENT,
}

export interface IProperty {
  id: number
  address: IAddress[]
  propertyName: string
  landlordName: ILandlordName[]
  category: Category
  rooms: number
  beds: number
  mq: number
  description: string
  facilities: IFacilities[]
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
    public address: IAddress[] = [],
    public propertyName = '',
    public landlordName: ILandlordName[] = [],
    public category,
    public rooms,
    public beds,
    public mq,
    public description = '',
    public facilities: IFacilities[] = [],
    public toilet,
    public numberOfToilet,
    public imagePath = [],
    public isAvailable = true,
    public review = '',
    public vote
  ) {}
}
