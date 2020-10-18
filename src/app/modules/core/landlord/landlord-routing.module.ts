import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const profileModule = () =>
  import('./profile/profile.module').then((p) => p.ProfileModule)

const realEstateModule = () =>
  import('./realestate/realestate.module').then((p) => p.RealestateModule)

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: profileModule,
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
