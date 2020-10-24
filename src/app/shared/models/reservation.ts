export interface IReservation {
  reservationId: number
  tenantId: number
  propertyId: number
  guestNumber: number
  checkIn: Date | string
  checkOut: Date | string
  specialRequest?: string
}

export class Reservation implements IReservation {
  reservationId: number
  tenantId: number
  propertyId: number
  guestNumber: number
  checkIn: Date | string
  checkOut: Date | string
  specialRequest?: string

  private constructor(res: Reservation) {
    this.reservationId = res.reservationId
    this.tenantId = res.tenantId
    this.propertyId = res.propertyId
    this.checkIn = res.checkIn
    this.checkOut = res.checkOut
    this.specialRequest = res.specialRequest
  }

  static Build(reservation: Reservation): Reservation {
    return new this(reservation)
  }
}
