import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertismentRoutingModule } from './advertisment-routing.module'
import { AdvertismentContainerComponent } from './components/advertisment-container/advertisment-container.component'
import { AdvertismentListContainerComponent } from './components/advertisment-list-container/advertisment-list-container.component'

@NgModule({
  declarations: [AdvertismentListContainerComponent, AdvertismentContainerComponent],
  imports: [CommonModule, AdvertismentRoutingModule],
})
export class AdvertismentModule {}
