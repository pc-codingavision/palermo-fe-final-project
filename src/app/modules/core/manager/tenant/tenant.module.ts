import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerTenantEditComponent } from './components/edit/manager-tenant-edit.component'
import { ManagerTenantListComponent } from './components/list/manager-tenant-list.component'
import { ManagerTenantViewComponent } from './components/view/manager-tenant-view.component'
import { TenantContainerComponent } from './container/tenant-container.component'
import { TenantRoutingModule } from './tenant-routing.module'

const tenantComponents = [
  ManagerTenantEditComponent,
  ManagerTenantListComponent,
  ManagerTenantViewComponent,
  TenantContainerComponent,
]
@NgModule({
  declarations: [...tenantComponents],
  imports: [CommonModule, TenantRoutingModule],
})
export class TenantModule {}
