import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerLandlordEditComponent } from './components/edit/manager-landlord-edit.component'
import { ManagerLandlordListComponent } from './components/list/manager-landlord-list.component'
import { ManagerLandlordNewComponent } from './components/new/manager-landlord-new.component'
import { ManagerLandlordViewComponent } from './components/view/manager-landlord-view.component'
import { LandlordContainerComponent } from './container/landlord-container.component'

const routes: Routes = [
  { path: 'container', component: LandlordContainerComponent },
  { path: 'list', component: ManagerLandlordListComponent },
  { path: 'new', component: ManagerLandlordNewComponent },
  { path: 'edit', component: ManagerLandlordEditComponent },
  { path: 'view', component: ManagerLandlordViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule { }
