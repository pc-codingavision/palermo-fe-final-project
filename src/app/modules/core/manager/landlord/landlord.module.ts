import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './edit/edit.component'
import { LandlordContainerComponent } from './landlord-container/landlord-container.component'
import { LandlordRoutingModule } from './landlord-routing.module'
import { ListComponent } from './list/list.component'
import { NewComponent } from './new/new.component'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [
    ListComponent,
    NewComponent,
    EditComponent,
    ViewComponent,
    LandlordContainerComponent,
  ],
  imports: [CommonModule, LandlordRoutingModule],
})
export class LandlordModule {}
