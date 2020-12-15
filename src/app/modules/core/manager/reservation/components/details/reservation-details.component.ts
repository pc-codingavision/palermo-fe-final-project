import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { IReservation } from '@shared/models/reservation'
import { Tenant } from '@shared/models/tenant'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss'],
})
export class ReservationDetailsComponent implements OnInit {
  tenantId: number
  reservation: IReservation
  tenant: Observable<Tenant>
  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private tenantService: InMemoryTenantService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 0)
    // this.reservation = this.reservationService.getById(id).pipe(
    //   map((reservation) => {
    //     this.tenant = this.tenantService.getById(reservation.tenantId)
    //     return reservation
    //   })
    // )
    this.reservationService.getById(id).subscribe((reservation) => {
      this.tenant = this.tenantService.getById(reservation.tenantId)
      return (this.reservation = reservation)
    })
  }
}
