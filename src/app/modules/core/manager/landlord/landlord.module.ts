import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../../../shared/material.module'
import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordEditComponent } from './components/edit/landlord-edit.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { AddressComponent } from './components/view/components/address/address.component'
import { ConfirmDialogComponent } from './components/view/components/confirm-dialog/confirm-dialog.component'
import { ContactComponent } from './components/view/components/contact/contact.component'
import { ViewContainerComponent } from './components/view/components/container/container.component'
import { PhoneComponent } from './components/view/components/phone/phone.component'
import { StatusComponent } from './components/view/components/status/status.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  LandlordEditComponent,
  LandlordListComponent,
  LandlordNewComponent,
  LandlordContainerComponent,
  ViewContainerComponent,
  StatusComponent,
  AddressComponent,
  PhoneComponent,
  ContactComponent,
]
@NgModule({
  declarations: [...landlordComponents, ConfirmDialogComponent],
  imports: [CommonModule, LandlordRoutingModule, MaterialModule, FlexLayoutModule],
})
export class LandlordModule {}
