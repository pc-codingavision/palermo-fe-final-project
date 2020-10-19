import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './../profile/edit/edit.component'
import { ListComponent } from './realestate-container/list/list.component'
import { NewComponent } from './realestate-container/new/new.component'

const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'new',
    component: NewComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestateRoutingModule {}
