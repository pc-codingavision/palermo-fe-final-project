import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertismentDetailsComponent } from './components/advertisment-details/advertisment-details.component'
import { AdvertismentListComponent } from './components/advertisment-list/advertisment-list.component'

const routes: Routes = [
  { path: 'list', component: AdvertismentListComponent },
  { path: 'details', component: AdvertismentDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertismentRoutingModule {}
