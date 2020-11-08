import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ProfileContainerComponent } from './components/container/profile-container.component'
import { ProfileEditComponent } from './components/edit/profile-edit.component'
import { ProfileViewComponent } from './components/view/profile-view.component'
import { ProfileRoutingModule } from './profile-routing.module'

@NgModule({
  declarations: [ProfileContainerComponent, ProfileEditComponent, ProfileViewComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
