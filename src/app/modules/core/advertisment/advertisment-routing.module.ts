import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertismentListContainerComponent } from './components/advertisment-list-container/advertisment-list-container.component'

const routes: Routes = [{ path: 'list', component: AdvertismentListContainerComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertismentRoutingModule {}
