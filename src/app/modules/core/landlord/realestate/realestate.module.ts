import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AddNewComponent } from './realestate-container/add-new/add-new.component'
import { EditComponent } from './realestate-container/edit/edit.component'
import { ListComponent } from './realestate-container/list/list.component'
import { RealestateContainerComponent } from './realestate-container/realestate-container.component'
import { RealestateRoutingModule } from './realestate-routing.module'

@NgModule({
  declarations: [
    RealestateContainerComponent,
    ListComponent,
    AddNewComponent,
    EditComponent,
  ],

  imports: [CommonModule, RealestateRoutingModule],
})
export class RealestateModule {}
