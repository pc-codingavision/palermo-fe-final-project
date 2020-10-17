import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ListComponent } from './reservation-container/list/list.component'
import { ReservationContainerComponent } from './reservation-container/reservation-container.component'

const routes: Routes = [
  {
    path: '',
    component: ReservationContainerComponent,
    children: [{ path: 'list', component: ListComponent }],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}
