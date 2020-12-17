import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReservationContainerComponent } from '@modules/core/manager/reservation/components/container/reservation-container.component'
import { ReservationDetailsComponent } from '@modules/core/manager/reservation/components/details/reservation-details.component'
import { ReservationListComponent } from '@modules/core/manager/reservation/components/list/reservation-list.component'
import { ReservationRoutingModule } from '@modules/core/manager/reservation/reservation-routing.module'
import { SharedModule } from '@modules/shared/shared.module'

const reservationComponents = [
  ReservationContainerComponent,
  ReservationListComponent,
  ReservationDetailsComponent,
]
@NgModule({
  declarations: [...reservationComponents],
  imports: [CommonModule, ReservationRoutingModule, SharedModule],
})
export class ReservationModule {}
