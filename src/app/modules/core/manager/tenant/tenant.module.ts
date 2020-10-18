import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './edit/edit.component'
import { ListComponent } from './list/list.component'
import { TenantContainerComponent } from './tenant-container/tenant-container.component'
import { TenantRoutingModule } from './tenant-routing.module'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent, TenantContainerComponent],
  imports: [CommonModule, TenantRoutingModule],
})
export class TenantModule {}
