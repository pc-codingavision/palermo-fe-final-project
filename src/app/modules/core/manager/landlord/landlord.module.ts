import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './../../../shared/material.module'
import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { AddressDetailsComponent } from './components/edit/components/address-details/address-details.component'
import { ButtonsContainerComponent } from './components/edit/components/buttons-container/buttons-container.component'
import { ContactDetailsComponent } from './components/edit/components/contact-details/contact-details.component'
import { EditContainerComponent } from './components/edit/components/container/edit-container.component'
import { PersonalDetailsComponent } from './components/edit/components/personal-details/personal-details.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { SearchComponent } from './components/search/search.component'
import { AddressComponent } from './components/view/components/address/address.component'
import { ButtonContainerComponent } from './components/view/components/button-container/button-container.component'
import { ConfirmDialogComponent } from './components/view/components/confirm-dialog/confirm-dialog.component'
import { ContactComponent } from './components/view/components/contact/contact.component'
import { ViewContainerComponent } from './components/view/components/container/container.component'
import { PhoneComponent } from './components/view/components/phone/phone.component'
import { StatusComponent } from './components/view/components/status/status.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  LandlordListComponent,
  LandlordNewComponent,
  LandlordContainerComponent,
  ViewContainerComponent,
  StatusComponent,
  AddressComponent,
  PhoneComponent,
  ContactComponent,
  SearchComponent,
  ConfirmDialogComponent,
  EditContainerComponent,
  ButtonContainerComponent,
  PersonalDetailsComponent,
  AddressDetailsComponent,
  ContactDetailsComponent,
  ButtonsContainerComponent,
]

@NgModule({
  declarations: [...landlordComponents],
  imports: [
    CommonModule,
    LandlordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class LandlordModule {}
