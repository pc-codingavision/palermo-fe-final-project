import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerComponent } from './container/manager-container.component'

const tenantModule = () => import('./tenant/tenant.module').then((m) => m.TenantModule)

const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'tenant', loadChildren: tenantModule },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
