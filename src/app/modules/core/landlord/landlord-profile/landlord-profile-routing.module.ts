import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LandlordProfileEditComponent } from './components/landlord-profile-edit/landlord-profile-edit.component'
import { LandlordProfileViewComponent } from './components/landlord-profile-view/landlord-profile-view.component'

const routes: Routes = [
  { path: 'view', component: LandlordProfileViewComponent },
  { path: 'edit', component: LandlordProfileEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordProfileRoutingModule {}
