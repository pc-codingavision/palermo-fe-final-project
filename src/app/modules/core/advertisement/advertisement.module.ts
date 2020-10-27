import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertisementContainerComponent } from './../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { CardContainerComponent } from './components/advertisement-list/properties-container/card-container/card-container.component'
import { CardMainViewComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/card-main-view.component'
import { PhotogalleryComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/photogallery/photogallery.component'
import { PropertiesContainerComponent } from './components/advertisement-list/properties-container/properties-container.component';
import { FacilitiesContainerComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/facilities-container/facilities-container.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    PropertiesContainerComponent,
    CardContainerComponent,
    CardMainViewComponent,
    PhotogalleryComponent,
    FacilitiesContainerComponent,
  ],

  imports: [CommonModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
