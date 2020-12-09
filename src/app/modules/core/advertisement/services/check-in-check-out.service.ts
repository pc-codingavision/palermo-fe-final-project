import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CheckInCheckOutService {
  dates: { checkIn: Date; checkOut: Date }
  reservationDates$: Subject<{ checkIn: Date; checkOut: Date }> = new Subject<{
    checkIn: Date
    checkOut: Date
  }>()
  constructor() {}

  setReservationDates(dates): void {
    this.reservationDates$.next(dates)
  }
}
