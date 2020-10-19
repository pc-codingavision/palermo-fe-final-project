import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ProfileContainerComponent } from './components/profile-container/profile-container.component'
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component'
import { ProfileViewComponent } from './components/profile-view/profile-view.component'
import { ProfileRoutingModule } from './profile-routing.module'

@NgModule({
  declarations: [ProfileContainerComponent, ProfileEditComponent, ProfileViewComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
