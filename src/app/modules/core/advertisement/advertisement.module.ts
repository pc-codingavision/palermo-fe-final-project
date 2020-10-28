import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../../shared/material.module'
import { AdvertisementContainerComponent } from './../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { LatestContainerComponent } from './components/advertisement-list/latest-container/latest-container.component'
import { LatestMiniCardComponent } from './components/advertisement-list/latest-container/latest-mini-card/latest-mini-card.component'
import { CardContainerComponent } from './components/advertisement-list/properties-container/card-container/card-container.component'
import { AboutComponent } from './components/advertisement-list/properties-container/card-container/card-extra/about/about.component'
import { CardExtraComponent } from './components/advertisement-list/properties-container/card-container/card-extra/card-extra.component'
import { FacilitiesComponent } from './components/advertisement-list/properties-container/card-container/card-extra/facilities/facilities.component'
import { ReviewComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/review/review.component'
import { ReviewsContainerComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/reviews-container.component'
import { PropertiesContainerComponent } from './components/advertisement-list/properties-container/properties-container.component'
import { FacilityFilterComponent } from './components/advertisement-list/sidebar-container/facility-filter/facility-filter.component'
import { PriceFilterComponent } from './components/advertisement-list/sidebar-container/price-filter/price-filter.component'
import { ScoreFilterComponent } from './components/advertisement-list/sidebar-container/score-filter/score-filter.component'
import { SidebarContainerComponent } from './components/advertisement-list/sidebar-container/sidebar-container.component'

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
    SidebarContainerComponent,
    PriceFilterComponent,
    FacilityFilterComponent,
    ScoreFilterComponent,
    LatestContainerComponent,
    LatestMiniCardComponent,
  ],

  imports: [CommonModule, AdvertisementRoutingModule, MaterialModule, FlexLayoutModule],
})
export class AdvertisementModule {}
