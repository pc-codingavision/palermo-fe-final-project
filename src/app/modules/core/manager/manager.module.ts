import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ManagerContainerComponent } from '@modules/core/manager/components/container/manager-container.component'
import { ManagerRoutingModule } from '@modules/core/manager/manager-routing.module'

@NgModule({
  declarations: [ManagerContainerComponent],
  imports: [CommonModule, ManagerRoutingModule],
})
export class ManagerModule {}
