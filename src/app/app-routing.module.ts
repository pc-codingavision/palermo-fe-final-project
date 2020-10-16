import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const landlordModule = () =>
  import('./modules/core/landlord/landlord.module').then((l) => l.LandlordModule)
const routes: Routes = [
  {
    path: 'lanlord',
    loadChildren: landlordModule,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
