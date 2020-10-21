import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertismentRoutingModule } from './advertisment-routing.module'
import { AdvertismentListContainerComponent } from './components/advertisment-list-container/advertisment-list-container.component';
import { AdvertismentContainerComponent } from './components/advertisment-container/advertisment-container.component'

@NgModule({
  declarations: [AdvertismentListContainerComponent, AdvertismentContainerComponent],
  imports: [CommonModule, AdvertismentRoutingModule],
})
export class AdvertismentModule {}
