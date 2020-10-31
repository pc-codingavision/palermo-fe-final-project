import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdvertisementContainerComponent } from './components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'

export const advertisementRoutes: Routes = [
  { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
  { path: 'advertisement', component: AdvertisementContainerComponent },
  { path: 'advertisement/list', component: AdvertisementListComponent },
  { path: 'advertisement/details/:id', component: AdvertisementDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(advertisementRoutes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
