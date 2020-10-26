import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { advertisementRoutes } from './modules/core/advertisement/advertisement-routing.module'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

const managerModule = () =>
  import('./modules/core/manager/manager.module').then((m) => m.ManagerModule)

const tenantModule = () =>
  import('./modules/core/tenant/tenant.module').then((t) => t.TenantModule)

const landlordModule = () =>
  import('./modules/core/landlord/landlord.module').then((l) => l.LandlordModule)

const routes: Routes = [
  { path: '', children: [...advertisementRoutes] },
  { path: 'tenant', loadChildren: tenantModule },
  { path: 'manager', loadChildren: managerModule },
  { path: 'landlord', loadChildren: landlordModule },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
