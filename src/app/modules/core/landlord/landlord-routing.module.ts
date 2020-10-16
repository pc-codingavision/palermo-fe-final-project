import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const profileModule = () =>
  import('./profile/profile.module').then((p) => p.ProfileModule)
const routes: Routes = [
  {
    path: 'profile',
    loadChildren: profileModule,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
