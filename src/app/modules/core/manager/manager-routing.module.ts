import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerComponent } from './manager-container/manager-container.component'

const reservationModule = () =>
  import('./reservation/reservation.module').then((r) => r.ReservationModule)
const landlordModule = () =>
  import('./landlord/landlord.module').then((l) => l.LandlordModule)
const tenantModule = () => import('./tenant/tenant.module').then((t) => t.TenantModule)
const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'landlord', loadChildren: landlordModule },
  { path: 'tenant', loadChildren: tenantModule },
  { path: 'reservation', loadChildren: reservationModule },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
