import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ManagerLandlordEditComponent } from './edit/manager-landlord-edit.component'
import { LandlordRoutingModule } from './landlord-routing.module'
import { ManagerLandlordListComponent } from './list/manager-landlord-list.component'
import { ManagerLandlordNewComponent } from './new/manager-landlord-new.component'
import { ManagerLandlordViewComponent } from './view/manager-landlord-view.component'

@NgModule({
  declarations: [
    ManagerLandlordEditComponent,
    ManagerLandlordListComponent,
    ManagerLandlordNewComponent,
    ManagerLandlordViewComponent,
  ],
  imports: [CommonModule, LandlordRoutingModule],
})
export class LandlordModule {}
