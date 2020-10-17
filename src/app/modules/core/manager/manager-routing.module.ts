import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerComponent } from './container/manager-container.component'

const routes: Routes = [{ path: '', component: ManagerComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
