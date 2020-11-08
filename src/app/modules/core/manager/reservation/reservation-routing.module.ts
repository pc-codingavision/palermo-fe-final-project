import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ReservationContainerComponent } from './components/container/reservation-container.component'
import { ReservationDetailsComponent } from './components/details/reservation-details.component'
import { ReservationListComponent } from './components/list/reservation-list.component'

const routes: Routes = [
  { path: '', component: ReservationContainerComponent },
  { path: 'list', component: ReservationListComponent },
  { path: 'details', component: ReservationDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
