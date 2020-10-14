import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AddNewComponent } from './add-new/add-new.component'
import { EditComponent } from './edit/edit.component'
import { ViewComponent } from './view/view.component'

const routes: Routes = [
  { path: 'addNew', component: AddNewComponent },
  { path: 'edit', component: EditComponent },
  { path: 'view', component: ViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
