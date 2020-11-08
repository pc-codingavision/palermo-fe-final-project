import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'

export const advertisementRoutes: Routes = [
  { path: '', redirectTo: 'advertisement/list', pathMatch: 'full' },
  { path: 'advertisement/list', component: AdvertisementListComponent },
  { path: 'advertisement/details/:id', component: AdvertisementDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(advertisementRoutes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
