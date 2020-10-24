import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertisementDetailsComponent } from './modules/core/advertisement/components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './modules/core/advertisement/components/advertisement-list/advertisement-list.component'
import { PageNotFoundComponent } from './shared/components/pagenotfound/pagenotfound.component'

const managerModule = () =>
  import('./modules/core/manager/manager.module').then((m) => m.ManagerModule)

const tenantModule = () =>
  import('./modules/core/tenant/tenant.module').then((t) => t.TenantModule)

const landlordModule = () =>
  import('./modules/core/landlord/landlord.module').then((l) => l.LandlordModule)

const routes: Routes = [
  { path: 'list', component: AdvertisementListComponent },
  { path: 'details', component: AdvertisementDetailsComponent },
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
