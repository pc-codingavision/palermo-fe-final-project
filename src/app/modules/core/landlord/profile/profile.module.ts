import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { EditComponent } from './profile-container/edit/edit.component'
import { ViewComponent } from './profile-container/view/view.component'
import { ProfileRoutingModule } from './profile-routing.module'

@NgModule({
  declarations: [ViewComponent, EditComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
