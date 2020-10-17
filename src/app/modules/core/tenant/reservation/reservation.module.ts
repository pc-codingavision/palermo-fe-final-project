import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ListComponent } from './reservation-container/list/list.component'
import { ReservationContainerComponent } from './reservation-container/reservation-container.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ListComponent, ReservationContainerComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
