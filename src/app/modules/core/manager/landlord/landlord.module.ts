import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { LandlordEditComponent } from '@modules/core/manager/landlord/components/edit/landlord-edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordNewComponent } from '@modules/core/manager/landlord/components/new/landlord-new.component'
import { LandlordRoutingModule } from '@modules/core/manager/landlord/landlord-routing.module'
import { SharedModule } from '@modules/shared/shared.module'

import { SearchComponent } from './components/search/search.component'
import { AddressComponent } from './components/view/components/address/address.component'
import { ConfirmDialogComponent } from './components/view/components/confirm-dialog/confirm-dialog.component'
import { ContactComponent } from './components/view/components/contact/contact.component'
import { ViewContainerComponent } from './components/view/components/container/container.component'
import { PhoneComponent } from './components/view/components/phone/phone.component'
import { StatusComponent } from './components/view/components/status/status.component'

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
  SearchComponent,
  ConfirmDialogComponent,
]

@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule, FormsModule, SharedModule],
})
export class LandlordModule {}
