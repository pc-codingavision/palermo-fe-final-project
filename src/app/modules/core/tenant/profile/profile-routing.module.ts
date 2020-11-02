import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ProfileEditComponent } from '@modules/core/tenant/profile/components/edit/profile-edit.component'
import { ProfileViewComponent } from '@modules/core/tenant/profile/components/view/profile-view.component'

const routes: Routes = [
  { path: 'view', component: ProfileViewComponent },
  { path: 'edit', component: ProfileEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
