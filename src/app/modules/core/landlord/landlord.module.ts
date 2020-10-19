import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LandlordProfileModule } from './landlord-profile/landlord-profile.module'
import { LandlordRoutingModule } from './landlord-routing.module'
import { RealestateModule } from './realestate/realestate.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, LandlordRoutingModule, LandlordProfileModule, RealestateModule],
})
export class LandlordModule {}
