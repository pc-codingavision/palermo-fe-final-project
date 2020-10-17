import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerComponent } from './container/manager-container.component'

const reservationModule = () =>
  import('./reservation/reservation.module').then((r) => r.ReservationModule)

const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'reservation', loadChildren: reservationModule },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule {}
