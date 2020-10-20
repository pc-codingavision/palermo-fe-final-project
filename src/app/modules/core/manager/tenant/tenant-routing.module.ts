import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TenantContainerComponent } from './components/container/tenant-container.component'
import { TenantEditComponent } from './components/edit/tenant-edit.component'
import { TenantListComponent } from './components/list/tenant-list.component'
import { TenantViewComponent } from './components/view/tenant-view.component'

const routes: Routes = [
  { path: '', component: TenantContainerComponent },
  { path: 'list', component: TenantListComponent },
  { path: 'view', component: TenantViewComponent },
  { path: 'edit', component: TenantEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
