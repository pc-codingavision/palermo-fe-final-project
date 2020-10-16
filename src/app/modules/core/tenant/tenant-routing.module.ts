import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const profileModule = () =>
  import('./profile/profile.module').then((p) => p.ProfileModule)

const reservationModule = () =>
  import('./reservation/reservation.module').then((r) => r.ReservationModule)

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: profileModule,
  },
  { path: 'reservation',
   loadChildren: reservationModule 
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
