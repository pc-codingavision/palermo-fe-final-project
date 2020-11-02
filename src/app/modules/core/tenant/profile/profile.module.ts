import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ProfileContainerComponent } from '@modules/core/tenant/profile/components/container/profile-container.component'
import { ProfileEditComponent } from '@modules/core/tenant/profile/components/edit/profile-edit.component'
import { ProfileViewComponent } from '@modules/core/tenant/profile/components/view/profile-view.component'
import { ProfileRoutingModule } from '@modules/core/tenant/profile/profile-routing.module'

@NgModule({
  declarations: [ProfileContainerComponent, ProfileEditComponent, ProfileViewComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
