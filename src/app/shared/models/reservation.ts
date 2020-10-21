import { IProperty } from './property'
import { Tenant } from './tenant'

export interface Reservation {
  reservationId: number
  tenant: Tenant
  property: IProperty
  guestNumber: number
  checkIn: Date
  checkOut: Date
  specialRequest?: string
}
