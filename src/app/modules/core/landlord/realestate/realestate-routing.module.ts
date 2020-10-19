import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RealestateAddComponent } from './components/realestate-add/realestate-add.component'
import { RealestateEditComponent } from './components/realestate-edit/realestate-edit.component'
import { RealestateListComponent } from './components/realestate-list/realestate-list.component'

const routes: Routes = [
  {
    path: 'edit',
    component: RealestateEditComponent,
  },
  {
    path: 'list',
    component: RealestateListComponent,
  },
  {
    path: 'add-new',
    component: RealestateAddComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealestateRoutingModule {}
