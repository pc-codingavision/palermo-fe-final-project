import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertismentDetailsComponent } from './components/advertisment-details/advertisment-details.component'

const routes: Routes = [{ path: 'details', component: AdvertismentDetailsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertismentRoutingModule {}
