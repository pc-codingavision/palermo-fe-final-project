import { Component, OnInit } from '@angular/core'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'
import { IReservation } from '@shared/models/reservation'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-reservation-container',
  templateUrl: './reservation-container.component.html',
  styleUrls: ['./reservation-container.component.scss'],
})
export class ReservationContainerComponent implements OnInit {
  reservations$: Observable<IReservation[]>
  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservations()
  }

  getReservations(): void {
    this.reservations$ = this.reservationService.getAll()
  }
}
