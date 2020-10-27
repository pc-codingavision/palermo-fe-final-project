import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from './../../../shared/material.module'
import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordEditComponent } from './components/edit/landlord-edit.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { LandlordViewComponent } from './components/view/landlord-view.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  LandlordEditComponent,
  LandlordListComponent,
  LandlordNewComponent,
  LandlordViewComponent,
  LandlordContainerComponent,
]
@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule, MaterialModule],
})
export class LandlordModule {}
