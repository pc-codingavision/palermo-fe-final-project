import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ManagerLandlordEditComponent } from './edit/manager-landlord-edit.component'
import { ManagerLandlordListComponent } from './list/manager-landlord-list.component'
import { ManagerLandlordNewComponent } from './new/manager-landlord-new.component'
import { ManagerLandlordViewComponent } from './view/manager-landlord-view.component'

const routes: Routes = [
  { path: 'list', component: ManagerLandlordListComponent },
  { path: 'new', component: ManagerLandlordNewComponent },
  { path: 'edit', component: ManagerLandlordEditComponent },
  { path: 'view', component: ManagerLandlordViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
