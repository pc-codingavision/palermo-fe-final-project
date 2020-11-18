import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from '@modules/core/advertisement/components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from '@modules/core/advertisement/components/advertisement-list/advertisement-list.component'
import { DataResolver } from '@modules/core/advertisement/services/data-resolver'

export const advertisementRoutes: Routes = [
  { path: '', redirectTo: 'advertisement', pathMatch: 'full' },
  { path: 'advertisement', component: AdvertisementContainerComponent },
  {
    path: 'advertisement/list',
    component: AdvertisementListComponent,
    resolve: { result: DataResolver },
  },
  { path: 'advertisement/details/:id', component: AdvertisementDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(advertisementRoutes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
