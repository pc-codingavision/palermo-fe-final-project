import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const landlordProfileModule = () =>
  import('./landlord-profile/landlord-profile.module').then(
    (p) => p.LandlordProfileModule
  )
const routes: Routes = [
  {
    path: 'profile',
    loadChildren: landlordProfileModule,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
