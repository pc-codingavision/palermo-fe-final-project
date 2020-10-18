import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerTenantEditComponent } from './edit/manager-tenant-edit.component'
import { ManagerTenantListComponent } from './list/manager-tenant-list.component'
import { ManagerTenantViewComponent } from './view/manager-tenant-view.component'

const routes: Routes = [
  {
    path: 'list',
    component: ManagerTenantEditComponent,
  },
  { path: 'view', component: ManagerTenantListComponent },
  { path: 'edit', component: ManagerTenantViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
