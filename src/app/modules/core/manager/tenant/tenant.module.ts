import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './edit/edit.component'
import { ListComponent } from './list/list.component'
import { TenantRoutingModule } from './tenant-routing.module'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [ListComponent, ViewComponent, EditComponent],
  imports: [CommonModule, TenantRoutingModule],
})
export class TenantModule {}
