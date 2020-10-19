import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerReservationDetailsComponent } from './components/details/manager-reservation-details.component'
import { ManagerReservationListComponent } from './components/list/manager-reservation-list.component'
import { ReservationContainerComponent } from './container/reservation-container.component'

const routes: Routes = [
  { path: 'container', component: ReservationContainerComponent },
  { path: 'list', component: ManagerReservationListComponent },
  { path: 'details', component: ManagerReservationDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
