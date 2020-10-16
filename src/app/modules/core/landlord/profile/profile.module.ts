import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ProfileRoutingModule } from './profile-routing.module'
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
