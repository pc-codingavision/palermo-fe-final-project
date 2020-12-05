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

  setReservationDates(checkIn: Date, checkOut: Date): void {
    this.reservationDates$.next({ checkIn, checkOut })
  }
}
