import { IReservation } from './../reservation'

export const RESERVATIONS: IReservation[] = [
  {
    id: 1,
    tenantId: 1,
    propertyId: 1,
    guestNumber: 3,
    checkIn: '24/10/2020',
    checkOut: '30/10/2020',
    specialRequest: '',
  },
  {
    id: 2,
    tenantId: 2,
    propertyId: 2,
    guestNumber: 3,
    checkIn: '26/11/2020',
    checkOut: '30/11/2020',
    specialRequest: 'I would like to do the check-in in early morning.',
  },
]
