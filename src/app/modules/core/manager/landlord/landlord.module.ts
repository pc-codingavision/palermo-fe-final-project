import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { EditComponent } from '@modules/core/manager/landlord/components/edit/edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordNewComponent } from '@modules/core/manager/landlord/components/new/landlord-new.component'
import { SearchComponent } from '@modules/core/manager/landlord/components/search/search.component'
import { AddressComponent } from '@modules/core/manager/landlord/components/view/components/address/address.component'
import { ButtonContainerComponent } from '@modules/core/manager/landlord/components/view/components/button-container/button-container.component'
import { ContactComponent } from '@modules/core/manager/landlord/components/view/components/contact/contact.component'
import { ViewContainerComponent } from '@modules/core/manager/landlord/components/view/components/container/container.component'
import { PhoneComponent } from '@modules/core/manager/landlord/components/view/components/phone/phone.component'
import { StatusComponent } from '@modules/core/manager/landlord/components/view/components/status/status.component'
import { SharedModule } from '@modules/shared/shared.module'

import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordRoutingModule } from './landlord-routing.module'

const landlordComponents = [
  LandlordContainerComponent,
  EditComponent,
  LandlordListComponent,
  LandlordNewComponent,
  SearchComponent,
  ViewContainerComponent,
  AddressComponent,
  ButtonContainerComponent,
  ContactComponent,
  PhoneComponent,
  StatusComponent,
]

@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule, FormsModule, SharedModule],
})
export class LandlordModule {}
