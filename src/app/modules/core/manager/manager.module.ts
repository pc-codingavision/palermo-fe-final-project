import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerContainerComponent } from './container/manager-container.component'
import { ManagerRoutingModule } from './manager-routing.module'

@NgModule({
  declarations: [ManagerContainerComponent],
  imports: [CommonModule, ManagerRoutingModule],
})
export class ManagerModule {}
