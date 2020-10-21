import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertismentRoutingModule } from './advertisment-routing.module'
import { AdvertismentContainerComponent } from './components/advertisment-container/advertisment-container.component'
import { AdvertismentListComponent } from './components/advertisment-list/advertisment-list.component'

@NgModule({
  declarations: [AdvertismentListComponent, AdvertismentContainerComponent],
  imports: [CommonModule, AdvertismentRoutingModule],
})
export class AdvertismentModule {}
