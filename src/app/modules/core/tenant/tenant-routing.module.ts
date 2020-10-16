import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const reservationModule = () =>
  import('./reservation/reservation.module').then((r) => r.ReservationModule)

const routes: Routes = [{ path: 'reservation', loadChildren: reservationModule }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantRoutingModule {}
