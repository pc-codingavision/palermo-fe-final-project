import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './edit/edit.component'
import { ProfileRoutingModule } from './profile-routing.module'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [ViewComponent, EditComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
