import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerComponent } from './container/manager-container.component'
import { ManagerRoutingModule } from './manager-routing.module';
import { LandlordModule } from './landlord/landlord.module'

@NgModule({
  declarations: [ManagerComponent],
  imports: [CommonModule, ManagerRoutingModule, LandlordModule],
})
export class ManagerModule {}
