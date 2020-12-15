import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CheckInCheckOutService {
  reservationDates$: BehaviorSubject<{
    checkIn: Date
    checkOut: Date
  }> = new BehaviorSubject<{
    checkIn: Date
    checkOut: Date
  }>(null)

  constructor() {}

  setReservationDates(dates: { checkIn: Date; checkOut: Date }): void {
    if (dates) {
      this.reservationDates$.next(dates)
    }
  }

  resetReservationDates(): void {
    this.reservationDates$.next(null)
  }
}
