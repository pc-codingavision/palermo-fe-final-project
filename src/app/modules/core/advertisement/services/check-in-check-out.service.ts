import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CheckInCheckOutService {
  reservationDates$: Subject<{ checkIn: Date; checkOut: Date }> = new Subject<{
    checkIn: Date
    checkOut: Date
  }>()
  constructor() {}

  setReservationDates(checkIn: Date, checkOut: Date): void {
    this.reservationDates$.next({ checkIn, checkOut })
  }
}
