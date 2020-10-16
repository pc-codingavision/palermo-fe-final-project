import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LandlordRoutingModule } from './landlord-routing.module';
import { ProfileModule } from './profile/profile.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, LandlordRoutingModule, ProfileModule],
})
export class LandlordModule {}
