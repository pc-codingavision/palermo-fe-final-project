import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ListComponent } from './list/list.component'
import { ReservationRoutingModule } from './reservation-routing.module'

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
