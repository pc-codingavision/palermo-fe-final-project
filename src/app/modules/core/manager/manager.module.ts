import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from './../../shared/material.module'
import { ManagerContainerComponent } from './components/container/manager-container.component'
import { ManagerRoutingModule } from './manager-routing.module'

@NgModule({
  declarations: [ManagerContainerComponent],
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
})
export class ManagerModule {}
