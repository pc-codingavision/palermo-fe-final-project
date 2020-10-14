import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AddNewComponent } from './add-new/add-new.component'
import { EditComponent } from './edit/edit.component'
import { LandlordRoutingModule } from './landlord-routing.module'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [AddNewComponent, ViewComponent, EditComponent],
  imports: [CommonModule, LandlordRoutingModule],
})
export class LandlordModule {}
