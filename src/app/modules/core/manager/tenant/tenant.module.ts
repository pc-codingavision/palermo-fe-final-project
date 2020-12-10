import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TenantContainerComponent } from '@modules/core/manager/tenant/components/container/tenant-container.component'
import { TenantEditComponent } from '@modules/core/manager/tenant/components/edit/tenant-edit.component'
import { TenantListComponent } from '@modules/core/manager/tenant/components/list/tenant-list.component'
import { TenantViewComponent } from '@modules/core/manager/tenant/components/view/tenant-view.component'
import { TenantRoutingModule } from '@modules/core/manager/tenant/tenant-routing.module'
import { SharedModule } from '@modules/shared/shared.module'

const tenantComponents = [
  TenantEditComponent,
  TenantListComponent,
  TenantViewComponent,
  TenantContainerComponent,
]
@NgModule({
  declarations: [...tenantComponents],
  imports: [CommonModule, TenantRoutingModule, SharedModule],
})
export class TenantModule {}
