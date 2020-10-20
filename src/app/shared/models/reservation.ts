export interface ITenantName {
  name: string
  middle?: string
  surname: string
}

export interface IReservation {
  reservationId: number
  tenantName: ITenantName
  tenantEmail: string
  tenantPhone: number
  guestNumber: number
  checkIn: Date
  checkOut: Date
  specialRequest?: string
}
