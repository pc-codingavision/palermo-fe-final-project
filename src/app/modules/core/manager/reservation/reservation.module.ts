import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ReservationContainerComponent } from './components/container/reservation-container.component'
import { ReservationDetailsComponent } from './components/details/reservation-details.component'
import { ReservationListComponent } from './components/list/reservation-list.component'
import { ReservationRoutingModule } from './reservation-routing.module'

const reservationComponents = [
  ReservationContainerComponent,
  ReservationListComponent,
  ReservationDetailsComponent,
]
@NgModule({
  declarations: [...reservationComponents],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
