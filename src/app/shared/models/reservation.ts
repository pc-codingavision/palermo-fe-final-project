export interface IReservation {
  id: number
  tenantId: number
  propertyId: number
  guestNumber: number
  checkIn: Date | string
  checkOut: Date | string
  specialRequest?: string
}

export class Reservation implements IReservation {
  private constructor(
    public id = null,
    public tenantId = null,
    public propertyId = null,
    public guestNumber = null,
    public checkIn: Date | null = null,
    public checkOut: Date | null = null,
    public specialRequest = ''
  ) {}

  static Build(reservation?: IReservation): Reservation {
    if (!reservation) {
      return new Reservation()
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
