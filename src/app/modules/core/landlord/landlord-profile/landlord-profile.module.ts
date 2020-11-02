import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProfileContainerComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-container/landlord-profile-container.component'
import { LandlordProfileEditComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-edit/landlord-profile-edit.component'
import { LandlordProfileViewComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-view/landlord-profile-view.component'
import { LandlordProfileRoutingModule } from '@modules/core/landlord/landlord-profile/landlord-profile-routing.module'

@NgModule({
  declarations: [
    LandlordProfileViewComponent,
    LandlordProfileEditComponent,
    ProfileContainerComponent,
  ],
  imports: [CommonModule, LandlordProfileRoutingModule],
})
export class LandlordProfileModule {}
