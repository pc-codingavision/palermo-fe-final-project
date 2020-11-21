import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LandlordContainerComponent } from '@modules/core/landlord/components/container/landlord-container.component'
import { LandlordRoutingModule } from '@modules/core/landlord/landlord-routing.module'
import { SharedModule } from '@modules/shared/shared.module'

@NgModule({
  declarations: [LandlordContainerComponent],
  imports: [CommonModule, LandlordRoutingModule, SharedModule],
})
export class LandlordModule {}
