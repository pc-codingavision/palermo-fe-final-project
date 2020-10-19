import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './realestate-container/edit/edit.component'
import { ListComponent } from './realestate-container/list/list.component'
import { NewComponent } from './realestate-container/new/new.component'
import { RealestateContainerComponent } from './realestate-container/realestate-container.component'
import { RealestateRoutingModule } from './realestate-routing.module'

@NgModule({
  declarations: [
    RealestateContainerComponent,
    ListComponent,
    NewComponent,
    EditComponent,
  ],

  imports: [CommonModule, RealestateRoutingModule],
})
export class RealestateModule {}
