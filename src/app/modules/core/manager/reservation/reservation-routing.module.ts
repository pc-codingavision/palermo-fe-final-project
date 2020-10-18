import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerReservationDetailsComponent } from './details/manager-reservation-details.component'
import { ManagerReservationListComponent } from './list/manager-reservation-list.component'

const routes: Routes = [
  { path: 'list', component: ManagerReservationListComponent },
  { path: 'details', component: ManagerReservationDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
