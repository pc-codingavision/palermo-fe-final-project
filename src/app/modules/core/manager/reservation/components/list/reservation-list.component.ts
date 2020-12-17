import { Component, Input, OnInit } from '@angular/core'
import { IReservation } from '@shared/models/reservation'

@Component({
  selector: 'cav-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'Tenant id',
    'checkIn',
    'checkOut',
    'guests',
    'details',
  ]
  @Input() reservations: IReservation[]
  constructor() {}

  ngOnInit(): void {}
}
