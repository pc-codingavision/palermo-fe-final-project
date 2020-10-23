import { IReservation } from './../reservation'

export const RESERVATIONS: IReservation[] = [
  {
    reservationId: 1,
    tenantId: 1,
    propertyId: 1,
    guestNumber: 3,
    checkIn: '24/10/2020',
    checkOut: '30/10/2020',
    specialRequest: '',
  },
  {
    reservationId: 2,
    tenantId: 2,
    propertyId: 2,
    guestNumber: 3,
    checkIn: '26/11/2020',
    checkOut: '30/11/2020',
    specialRequest: 'I would like to do the check-in in early morning.',
  },
  {
    reservationId: 3,
    tenantId: 3,
    propertyId: 3,
    guestNumber: 4,
    checkIn: '21/10/2020',
    checkOut: '30/10/2020',
    specialRequest: 'I would like to find some water when I arrive.',
  },
]
