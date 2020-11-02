import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReservationContainerComponent } from '@modules/core/manager/reservation/components/container/reservation-container.component'
import { ReservationDetailsComponent } from '@modules/core/manager/reservation/components/details/reservation-details.component'
import { ReservationListComponent } from '@modules/core/manager/reservation/components/list/reservation-list.component'

const reservationRoutes: Routes = [
  { path: '', component: ReservationContainerComponent },
  { path: 'list', component: ReservationListComponent },
  { path: 'details', component: ReservationDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(reservationRoutes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
