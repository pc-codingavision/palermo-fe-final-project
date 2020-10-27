import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MaterialModule } from './../../../shared/material.module'
import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordEditComponent } from './components/edit/landlord-edit.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { AddressComponent } from './components/view/components/address/address.component'
import { ContactComponent } from './components/view/components/contact/contact.component'
import { ContainerComponent } from './components/view/components/container/container.component'
import { PhoneComponent } from './components/view/components/phone/phone.component'
import { StatusComponent } from './components/view/components/status/status.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  LandlordEditComponent,
  LandlordListComponent,
  LandlordNewComponent,
  LandlordContainerComponent,
  ContainerComponent,
  StatusComponent,
  AddressComponent,
  PhoneComponent,
  ContactComponent,
]
@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule, MaterialModule],
})
export class LandlordModule {}
