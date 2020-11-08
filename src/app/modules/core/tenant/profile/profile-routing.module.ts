import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ProfileEditComponent } from './components/edit/profile-edit.component'
import { ProfileViewComponent } from './components/view/profile-view.component'

const routes: Routes = [
  { path: 'view', component: ProfileViewComponent },
  { path: 'edit', component: ProfileEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
