import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'

const routes: Routes = [
  { path: 'list', component: AdvertisementListComponent },
  { path: 'details', component: AdvertisementDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
