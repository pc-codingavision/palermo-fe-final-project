import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '@modules/shared/shared.module'

import { ManagerContainerComponent } from './components/container/manager-container.component'
import { ManagerRoutingModule } from './manager-routing.module'

@NgModule({
  declarations: [ManagerContainerComponent],
  imports: [CommonModule, ManagerRoutingModule, SharedModule],
})
export class ManagerModule {}
