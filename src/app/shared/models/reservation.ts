export interface IReservation {
  reservationId: number
  tenantId: number
  propertyId: number
  guestNumber: number
  checkIn: Date | string
  checkOut: Date | string
  specialRequest?: string
}
