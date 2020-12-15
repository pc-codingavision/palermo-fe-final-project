import { TestBed } from '@angular/core/testing'

import { CheckInCheckOutService } from './check-in-check-out.service'

describe('CheckInCheckOutService', () => {
  let service: CheckInCheckOutService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CheckInCheckOutService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#setReservationDates should set reservationDates$', (done: DoneFn) => {
    service.setReservationDates({
      checkIn: new Date(2020, 10, 11),
      checkOut: new Date(2020, 10, 12),
    })
    service.reservationDates$.subscribe((result) =>
      expect(result).toEqual({
        checkIn: new Date(2020, 10, 11),
        checkOut: new Date(2020, 10, 12),
      })
    )
    done()
  })

  it("#setReservationDates shouldn't set reservationDates$ if we pass null or undefined", (done: DoneFn) => {
    service.setReservationDates(undefined)
    service.reservationDates$.subscribe((result) => expect(result).toEqual(null))

    service.setReservationDates(null)
    service.reservationDates$.subscribe((result) => expect(result).toEqual(null))
    done()
  })

  it('#resetReservationDates should reset reservationDates$', (done: DoneFn) => {
    service.setReservationDates({
      checkIn: new Date(2020, 10, 11),
      checkOut: new Date(2020, 10, 12),
    })

    service.resetReservationDates()

    service.reservationDates$.subscribe((result) => expect(result).toBeNull())
    done()
  })
})
