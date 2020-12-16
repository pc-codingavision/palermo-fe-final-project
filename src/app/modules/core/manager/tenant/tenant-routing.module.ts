import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TenantContainerComponent } from '@modules/core/manager/tenant/components/container/tenant-container.component'
import { TenantEditComponent } from '@modules/core/manager/tenant/components/edit/tenant-edit.component'

const routes: Routes = [
  { path: '', component: TenantContainerComponent },
  { path: 'edit', component: TenantEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
