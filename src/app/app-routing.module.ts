import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const tenantModule = () =>
  import('./modules/core/tenant/tenant.module').then((t) => t.TenantModule)

const landlordModule = () =>
  import('./modules/core/landlord/landlord.module').then((l) => l.LandlordModule)
const routes: Routes = [
  {
    path: 'landlord',
    loadChildren: landlordModule,
  },
  { path: 'tenant', loadChildren: tenantModule },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
