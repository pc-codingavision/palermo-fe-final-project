import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerTenantEditComponent } from './components/edit/manager-tenant-edit.component'
import { ManagerTenantListComponent } from './components/list/manager-tenant-list.component'
import { ManagerTenantViewComponent } from './components/view/manager-tenant-view.component'
import { TenantContainerComponent } from './container/tenant-container.component'

const routes: Routes = [
  { path: 'container', component: TenantContainerComponent },
  { path: 'list', component: ManagerTenantListComponent },
  { path: 'view', component: ManagerTenantViewComponent },
  { path: 'edit', component: ManagerTenantEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
