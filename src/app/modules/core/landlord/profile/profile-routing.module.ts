import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './profile-container/edit/edit.component'
import { ViewComponent } from './profile-container/view/view.component'

const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
