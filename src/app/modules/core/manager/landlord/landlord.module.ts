import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MaterialModule } from './../../../shared/material.module'
import { LandlordContainerComponent } from './components/container/landlord-container.component'
import { LandlordEditComponent } from './components/edit/landlord-edit.component'
import { LandlordListComponent } from './components/list/landlord-list.component'
import { LandlordNewComponent } from './components/new/landlord-new.component'
import { SearchComponent } from './components/search/search.component'
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
  declarations: [...landlordComponents, SearchComponent],
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
