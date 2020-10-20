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
  toilet: TOILET
  imagePath: string
  avaible: boolean
}
