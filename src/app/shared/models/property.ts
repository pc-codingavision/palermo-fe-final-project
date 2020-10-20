import { IAddress } from './property'
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
  inside = 'INSIDE',
  outside = 'OUTSIDE',
  shared = 'SHARED',
}

export interface IProperty {
  id: number
  address: IAddress
  propertyName: string
  landlordName: ILandlordName
  rooms: number
  beds: number
  mq: number
  description: string
  facilities: IFacilities
  toilet: Toilet
  imagePath: string
  availability: boolean
}

export class Property implements IProperty {
  constructor(
    public id = '',
    public address = '',
    public propertyName = '',
    public landlordName = '',
    public rooms = '',
    public beds = '',
    public mq = '',
    public description = '',
    public facilities = '',
    public toilet = '',
    public imagePath = '',
    public availability = true
  ) {}
}
