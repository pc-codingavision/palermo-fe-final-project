import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerLandlordEditComponent } from './components/edit/manager-landlord-edit.component'
import { ManagerLandlordListComponent } from './components/list/manager-landlord-list.component'
import { ManagerLandlordNewComponent } from './components/new/manager-landlord-new.component'
import { ManagerLandlordViewComponent } from './components/view/manager-landlord-view.component'
import { LandlordContainerComponent } from './container/landlord-container.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  ManagerLandlordEditComponent,
  ManagerLandlordListComponent,
  ManagerLandlordNewComponent,
  ManagerLandlordViewComponent,
  LandlordContainerComponent,
]
@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule],
})
export class LandlordModule {}
