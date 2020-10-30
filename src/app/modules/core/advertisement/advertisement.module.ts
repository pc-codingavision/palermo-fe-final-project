import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '../../shared/material.module'
import { AdvertisementContainerComponent } from '../advertisement/components/advertisement-container/advertisement-container.component'
import { LatestContainerComponent } from '../advertisement/components/advertisement-list/latest/latest-container/latest-container.component'
import { CardContainerComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-container.component'
import { DatesComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/dates/dates.component'
import { FacilityComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/facilities-container/facility/facility.component'
import { ScoreComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/score/score.component'
import { PropertiesContainerComponent } from '../advertisement/components/advertisement-list/properties-container/properties-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { LatestMiniCardComponent } from './components/advertisement-list/latest/latest-mini-card/latest-mini-card.component'
import { AboutComponent } from './components/advertisement-list/properties-container/card-container/card-extra/about/about.component'
import { CardExtraComponent } from './components/advertisement-list/properties-container/card-container/card-extra/card-extra.component'
import { FacilitiesComponent } from './components/advertisement-list/properties-container/card-container/card-extra/facilities/facilities.component'
import { ReviewComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/review/review.component'
import { ReviewsContainerComponent } from './components/advertisement-list/properties-container/card-container/card-extra/reviews-container/reviews-container.component'
import { BookButtonComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/book-button/book-button.component'
import { CardMainViewComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/card-main-view.component'
import { FacilitiesContainerComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/facilities-container/facilities-container.component'
import { FavouriteComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/favourite/favourite.component'
import { PhotogalleryComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/photogallery/photogallery.component'
import { FacilityFilterComponent } from './components/advertisement-list/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from './components/advertisement-list/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from './components/advertisement-list/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from './components/advertisement-list/sidebar/sidebar-container/sidebar-container.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    PropertiesContainerComponent,
    CardExtraComponent,
    ReviewsContainerComponent,
    ReviewComponent,
    AboutComponent,
    FacilitiesComponent,
    CardContainerComponent,
    CardMainViewComponent,
    PhotogalleryComponent,
    FacilitiesContainerComponent,
    FacilityComponent,
    FavouriteComponent,
    ScoreComponent,
    DatesComponent,
    BookButtonComponent,
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
