import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ReservationListComponent } from '@modules/core/tenant/reservation/components/list/reservation-list.component'

const routes: Routes = [{ path: 'list', component: ReservationListComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
