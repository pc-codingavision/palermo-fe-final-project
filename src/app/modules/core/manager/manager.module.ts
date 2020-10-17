import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerComponent } from './container/manager-container.component'
import { LandlordModule } from './landlord/landlord.module'
import { ManagerRoutingModule } from './manager-routing.module'
import { ReservationModule } from './reservation/reservation.module'
import { TenantModule } from './tenant/tenant.module'

@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    LandlordModule,
    TenantModule,
    ReservationModule,
  ],
})
export class ManagerModule {}
