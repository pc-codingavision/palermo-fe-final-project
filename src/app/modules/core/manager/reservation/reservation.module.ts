import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { DetailsComponent } from './details/details.component'
import { ListComponent } from './list/list.component'
import { ReservationContainerComponent } from './reservation-container/reservation-container.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ListComponent, DetailsComponent, ReservationContainerComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
