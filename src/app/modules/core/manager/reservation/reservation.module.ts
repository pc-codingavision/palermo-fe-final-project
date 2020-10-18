import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerReservationDetailsComponent } from './details/manager-reservation-details.component'
import { ManagerReservationListComponent } from './list/manager-reservation-list.component'
import { ReservationContainerComponent } from './reservation-container/reservation-container.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [
    ManagerReservationListComponent,
    ManagerReservationDetailsComponent,
    ReservationContainerComponent,
  ],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
