import { Category } from './../enum/category'
import { Status } from '../enum/status'
import { Toilet } from '../enum/toilet'

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

export interface IRoom {
  roomName: string
  beds: number
  toilet: Toilet
  mq: number
}

export interface IProperty {
  id: number
  landlordId: number
  address: IAddress
  propertyTitle: string
  category: Category
  rooms: IRoom[]
  numberOfToilet: number
  description: string
  facilities: IFacilities
  imagesPath: string[]
  status: Status
}

export class Property implements IProperty {
  private constructor(
    public id: number,
    public landlordId: number,
    public address: IAddress,
    public propertyTitle: string,
    public category: Category,
    public rooms: IRoom[],
    public numberOfToilet: number,
    public description: string,
    public facilities: IFacilities,
    public imagesPath: string[],
    public status: Status
  ) {}

  static Build(property: IProperty): Property {
    if (!property) {
      throw new Error('Insert a valid value')
    }
    return new Property(
      property.id,
      property.landlordId,
      property.address,
      property.propertyTitle,
      property.category,
      property.rooms,
      property.numberOfToilet,
      property.description,
      property.facilities,
      property.imagesPath,
      property.status
    )
  }
}
