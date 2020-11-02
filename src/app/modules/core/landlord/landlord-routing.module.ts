import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const realEstateModule = () =>
  import('./real-estate/real-estate.module').then((p) => p.RealEstateModule)

const landlordProfileModule = () =>
  import('./landlord-profile/landlord-profile.module').then(
    (p) => p.LandlordProfileModule
  )

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: landlordProfileModule,
  },
  {
    path: 'realestate',
    loadChildren: realEstateModule,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
