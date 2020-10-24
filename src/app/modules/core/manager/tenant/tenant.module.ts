import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TenantContainerComponent } from './components/container/tenant-container.component'
import { TenantEditComponent } from './components/edit/tenant-edit.component'
import { TenantListComponent } from './components/list/tenant-list.component'
import { TenantViewComponent } from './components/view/tenant-view.component'
import { TenantRoutingModule } from './tenant-routing.module'

const tenantComponents = [
  TenantEditComponent,
  TenantListComponent,
  TenantViewComponent,
  TenantContainerComponent,
]
@NgModule({
  declarations: [...tenantComponents],
  imports: [CommonModule, TenantRoutingModule],
})
export class TenantModule {}
