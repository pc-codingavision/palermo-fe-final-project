import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerComponent } from './container/manager-container.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ReservationModule } from './reservation/reservation.module'

@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule, ReservationModule],
})
export class ManagerModule {}
