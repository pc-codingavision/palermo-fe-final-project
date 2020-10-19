import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerReservationDetailsComponent } from './components/details/manager-reservation-details.component'
import { ManagerReservationListComponent } from './components/list/manager-reservation-list.component'
import { ReservationContainerComponent } from './container/reservation-container.component'
import { ReservationRoutingModule } from './reservation-routing.module'

const reservationComponents = [
  ReservationContainerComponent,
  ManagerReservationListComponent,
  ManagerReservationDetailsComponent,
  ReservationContainerComponent,
]
@NgModule({
  declarations: [...reservationComponents],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
