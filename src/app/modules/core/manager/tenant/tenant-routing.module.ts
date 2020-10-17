import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './edit/edit.component'
import { ListComponent } from './list/list.component'
import { ViewComponent } from './view/view.component'

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
