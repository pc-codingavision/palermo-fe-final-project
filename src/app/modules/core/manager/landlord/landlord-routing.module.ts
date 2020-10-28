import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordEditComponent } from './components/edit/landlord-edit.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { ViewContainerComponent } from './components/view/components/container/container.component'

const routes: Routes = [
  { path: '', component: LandlordContainerComponent },
  { path: 'list', component: LandlordListComponent },
  { path: 'new', component: LandlordNewComponent },
  { path: 'edit', component: LandlordEditComponent },
  { path: 'view', component: ViewContainerComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
