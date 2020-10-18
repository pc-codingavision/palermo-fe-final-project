import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { LandlordProfileEditComponent } from './landlord-profile-container/landlord-profile-edit/landlord-profile-edit.component'
import { LandlordProfileViewComponent } from './landlord-profile-container/landlord-profile-view/landlord-profile-view.component'
import { LandlordProfileRoutingModule } from './landlord-profile-routing.module'

@NgModule({
  declarations: [LandlordProfileViewComponent, LandlordProfileEditComponent],
  imports: [CommonModule, LandlordProfileRoutingModule],
})
export class LandlordProfileModule {}
