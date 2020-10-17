import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerComponent } from './container/manager-container.component'

const landlordModule = () => import('./landlord/landlord.module').then(l => l.LandlordModule);
const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'landlord', loadChildren: landlordModule }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerRoutingModule { }
