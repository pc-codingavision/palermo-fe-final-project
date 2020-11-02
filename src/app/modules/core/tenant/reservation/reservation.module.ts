import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ReservationContainerComponent } from '@modules/core/tenant/reservation/components/container/reservation-container.component'
import { ReservationListComponent } from '@modules/core/tenant/reservation/components/list/reservation-list.component'
import { ReservationRoutingModule } from '@modules/core/tenant/reservation/reservation-routing.module'

@NgModule({
  declarations: [ReservationListComponent, ReservationContainerComponent],
  imports: [CommonModule, ReservationRoutingModule],
})
export class ReservationModule {}
