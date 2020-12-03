import { Category, Status, Toilet } from '@shared/enum/enums'
import { IAddress } from '@shared/models/users'

export interface IFacility {
  tv: boolean
  wifi: boolean
  breakfastIncluded: boolean
  parking: boolean
  kitchen: boolean
  shower: boolean
  bath: boolean
}

export interface IRoom {
  name: string
  beds: number
  toilet: Toilet
  mq: number
}

export interface IPicture {
  image: string
  thumbImage: string
  title?: string
  alt: string
}

export interface IProperty {
  id: number
  landlordId: number
  address: IAddress
  title: string
  category: Category
  rooms: IRoom[]
  numberOfToilet: number
  description: string
  facilities: IFacility
  images: IPicture[]
  status: Status
}

export class Property implements IProperty {
  private constructor(
    public id = null,
    public landlordId = null,
    public address = null,
    public title = null,
    public category = null,
    public rooms = null,
    public numberOfToilet = null,
    public description = null,
    public facilities = null,
    public images = null,
    public status = null
  ) {}

  static Build(property: IProperty): Property {
    if (!property) {
      return new Property()
    }
    return new Property(
      property.id,
      property.landlordId,
      property.address,
      property.title,
      property.category,
      property.rooms,
      property.numberOfToilet,
      property.description,
      property.facilities,
      property.images,
      property.status
    )
  }
}
