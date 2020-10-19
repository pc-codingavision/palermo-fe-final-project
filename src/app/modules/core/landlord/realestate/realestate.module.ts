import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { RealestateAddComponent } from './components/realestate-add/realestate-add.component'
import { RealestateContainerComponent } from './components/realestate-container/realestate-container.component'
import { RealestateEditComponent } from './components/realestate-edit/realestate-edit.component'
import { RealestateListComponent } from './components/realestate-list/realestate-list.component'
import { RealestateRoutingModule } from './realestate-routing.module'

@NgModule({
  declarations: [
    RealestateContainerComponent,
    RealestateAddComponent,
    RealestateListComponent,
    RealestateEditComponent,
  ],

  imports: [CommonModule, RealestateRoutingModule],
})
export class RealestateModule {}
