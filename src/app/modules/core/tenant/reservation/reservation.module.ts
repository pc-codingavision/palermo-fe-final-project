import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ReservationContainerComponent } from './components/reservation-container/reservation-container.component'
import { ReservationListComponent } from './components/reservation-list/reservation-list.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ReservationListComponent, ReservationContainerComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
