import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { LandlordEditComponent } from '@modules/core/manager/landlord/components/edit/landlord-edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordNewComponent } from '@modules/core/manager/landlord/components/new/landlord-new.component'
import { LandlordViewComponent } from '@modules/core/manager/landlord/components/view/landlord-view.component'
import { LandlordRoutingModule } from '@modules/core/manager/landlord/landlord-routing.module'

const landlordComponents = [
  LandlordEditComponent,
  LandlordListComponent,
  LandlordNewComponent,
  LandlordViewComponent,
  LandlordContainerComponent,
]

@NgModule({
  declarations: [...landlordComponents],
  imports: [CommonModule, LandlordRoutingModule],
})
export class LandlordModule {}
