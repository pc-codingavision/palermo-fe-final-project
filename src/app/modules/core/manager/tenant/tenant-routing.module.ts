import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TenantContainerComponent } from '@modules/core/manager/tenant/components/container/tenant-container.component'
import { TenantEditComponent } from '@modules/core/manager/tenant/components/edit/tenant-edit.component'
import { TenantListComponent } from '@modules/core/manager/tenant/components/list/tenant-list.component'
import { TenantViewComponent } from '@modules/core/manager/tenant/components/view/tenant-view.component'

const routes: Routes = [
  { path: '', component: TenantContainerComponent },
  { path: 'list', component: TenantListComponent },
  { path: 'view', component: TenantViewComponent },
  { path: 'edit', component: TenantEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
