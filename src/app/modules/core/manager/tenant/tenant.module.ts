import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerTenantEditComponent } from './edit/manager-tenant-edit.component'
import { ManagerTenantListComponent } from './list/manager-tenant-list.component'
import { TenantContainerComponent } from './tenant-container/tenant-container.component'
import { TenantRoutingModule } from './tenant-routing.module'
import { ManagerTenantViewComponent } from './view/manager-tenant-view.component'

@NgModule({
  declarations: [
    ManagerTenantEditComponent,
    ManagerTenantListComponent,
    ManagerTenantViewComponent,
    TenantContainerComponent,
  ],
  imports: [CommonModule, TenantRoutingModule],
})
export class TenantModule {}
