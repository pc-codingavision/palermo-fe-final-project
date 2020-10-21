import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertismentListComponent } from './components/advertisment-list/advertisment-list.component'

const routes: Routes = [{ path: 'list', component: AdvertismentListComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertismentRoutingModule {}
