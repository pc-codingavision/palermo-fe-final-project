import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertisementContainerComponent } from './../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { PropertiesContainerComponent } from './components/advertisement-list/properties-container/properties-container.component';
import { CardContainerComponent } from './components/advertisement-list/properties-container/card-container/card-container.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    PropertiesContainerComponent,
    CardContainerComponent,
  ],

  imports: [CommonModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
