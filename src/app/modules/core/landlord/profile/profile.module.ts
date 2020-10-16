import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ProfileRoutingModule } from './profile-routing.module'
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [ViewComponent, EditComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
