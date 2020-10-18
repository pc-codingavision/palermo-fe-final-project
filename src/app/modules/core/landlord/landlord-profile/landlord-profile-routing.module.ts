import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LandlordProfileEditComponent } from './landlord-profile-container/landlord-profile-edit/landlord-profile-edit.component'
import { LandlordProfileViewComponent } from './landlord-profile-container/landlord-profile-view/landlord-profile-view.component'

const routes: Routes = [
  { path: 'view', component: LandlordProfileViewComponent },
  { path: 'edit', component: LandlordProfileEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordProfileRoutingModule {}
