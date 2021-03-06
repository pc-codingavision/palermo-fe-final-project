import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordProfileEditComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-edit/landlord-profile-edit.component'
import { LandlordProfileViewComponent } from '@modules/core/landlord/landlord-profile/components/landlord-profile-view/landlord-profile-view.component'

const landlordProfileRoutes: Routes = [
  { path: 'view', component: LandlordProfileViewComponent },
  { path: 'edit', component: LandlordProfileEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(landlordProfileRoutes)],
  exports: [RouterModule],
})
export class LandlordProfileRoutingModule {}
