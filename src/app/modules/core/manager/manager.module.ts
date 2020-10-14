import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LandlordModule } from './landlord/landlord.module'
import { ManagerRoutingModule } from './manager-routing.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, ManagerRoutingModule, LandlordModule],
})
export class ManagerModule {}
