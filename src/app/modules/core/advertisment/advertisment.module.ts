import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertismentRoutingModule } from './advertisment-routing.module'
import { AdvertismentDetailsComponent } from './components/advertisment-details/advertisment-details.component'

@NgModule({
  declarations: [AdvertismentDetailsComponent],
  imports: [CommonModule, AdvertismentRoutingModule],
})
export class AdvertismentModule {}
