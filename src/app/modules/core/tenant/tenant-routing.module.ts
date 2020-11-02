import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const reservationModule = () =>
  import('./reservation/reservation.module').then((r) => r.ReservationModule)

const profileModule = () =>
  import('./profile/profile.module').then((p) => p.ProfileModule)

const tenantRoutes: Routes = [
  {
    path: 'profile',
    loadChildren: profileModule,
  },
  { path: 'reservation', loadChildren: reservationModule },
]

@NgModule({
  imports: [RouterModule.forChild(tenantRoutes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
