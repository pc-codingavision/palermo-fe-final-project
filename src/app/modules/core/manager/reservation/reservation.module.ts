import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { DetailsComponent } from './details/details.component'
import { ListComponent } from './list/list.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ListComponent, DetailsComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
