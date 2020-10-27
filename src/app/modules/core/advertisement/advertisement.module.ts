import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../../shared/material.module'
import { AdvertisementContainerComponent } from './../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { CardContainerComponent } from './components/advertisement-list/properties-container/card-container/card-container.component'
import { AboutComponent } from './components/advertisement-list/properties-container/card-container/card-extra/about/about.component'
import { CardExtraComponent } from './components/advertisement-list/properties-container/card-container/card-extra/card-extra.component'
import { FacilitiesComponent } from './components/advertisement-list/properties-container/card-container/card-extra/facilities/facilities.component'
import { ReviewComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/review/review.component'
import { ReviewsContainerComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/reviews-container.component'
import { PropertiesContainerComponent } from './components/advertisement-list/properties-container/properties-container.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    PropertiesContainerComponent,
    CardExtraComponent,
    CardContainerComponent,
    ReviewsContainerComponent,
    ReviewComponent,
    AboutComponent,
    FacilitiesComponent,
  ],

  imports: [CommonModule, AdvertisementRoutingModule, MaterialModule, FlexLayoutModule],
})
export class AdvertisementModule {}
