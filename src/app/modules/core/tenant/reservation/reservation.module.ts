import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ReservationContainerComponent } from './components/container/reservation-container.component'
import { ReservationListComponent } from './components/list/reservation-list.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ReservationListComponent, ReservationContainerComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
