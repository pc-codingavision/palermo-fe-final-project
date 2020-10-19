import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './../profile/edit/edit.component'
import { ListComponent } from './realestate-container/list/list.component'
import { AddNewComponent } from './realestate-container/new/new.component'

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'lsit',
    component: ListComponent,
  },
  {
    path: 'add-new',
    component: AddNewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestateRoutingModule {}
