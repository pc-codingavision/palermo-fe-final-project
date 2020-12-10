import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CheckInCheckOutService {
  dates: { checkIn: Date; checkOut: Date }
  reservationDates$: BehaviorSubject<{
    checkIn: Date
    checkOut: Date
  }> = new BehaviorSubject<{
    checkIn: Date
    checkOut: Date
  }>(null)

  constructor() {}

  setReservationDates(dates): void {
    this.reservationDates$.next(dates)
  }

  getReservationDates(): BehaviorSubject<{ checkIn: Date; checkOut: Date }> {
    return this.reservationDates$
  }
}
