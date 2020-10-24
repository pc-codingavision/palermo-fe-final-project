import { stringify } from 'querystring'

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

  static Build(reservation: IReservation): Reservation {
    if (!reservation) {
      throw new Error('Error: need to write something.')
    }

    if (typeof reservation.checkIn === 'string') {
      reservation.checkIn = new Date(reservation.checkIn)
    }

    if (typeof reservation.checkOut === 'string') {
      reservation.checkOut = new Date(reservation.checkOut)
    }

    return new this(reservation)
  }
}
