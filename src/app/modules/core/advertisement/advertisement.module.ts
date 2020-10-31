import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '../../shared/material.module'
import { AdvertisementContainerComponent } from '../advertisement/components/advertisement-container/advertisement-container.component'
import { LatestContainerComponent } from '../advertisement/components/advertisement-list/latest/latest-container/latest-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementService } from './advertisement.service'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { CardContainerComponent } from './components/advertisement-list/card/card-container/card-container.component'
import { AboutComponent } from './components/advertisement-list/card/card-extra/about/about.component'
import { CardExtraComponent } from './components/advertisement-list/card/card-extra/card-extra.component'
import { FacilitiesComponent } from './components/advertisement-list/card/card-extra/facilities/facilities.component'
import { ReviewComponent } from './components/advertisement-list/card/card-extra/review/review.component'
import { BookButtonComponent } from './components/advertisement-list/card/card-main-view/book-button/book-button.component'
import { CardMainViewComponent } from './components/advertisement-list/card/card-main-view/card-main-view.component'
import { DatesComponent } from './components/advertisement-list/card/card-main-view/dates/dates.component'
import { FacilitiesContainerComponent } from './components/advertisement-list/card/card-main-view/facilities-container/facilities-container.component'
import { FacilityComponent } from './components/advertisement-list/card/card-main-view/facilities-container/facility/facility.component'
import { FavouriteComponent } from './components/advertisement-list/card/card-main-view/favourite/favourite.component'
import { PhotogalleryComponent } from './components/advertisement-list/card/card-main-view/photogallery/photogallery.component'
import { ScoreComponent } from './components/advertisement-list/card/card-main-view/score/score.component'
import { LatestMiniCardComponent } from './components/advertisement-list/latest/latest-mini-card/latest-mini-card.component'
import { FacilityFilterComponent } from './components/advertisement-list/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from './components/advertisement-list/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from './components/advertisement-list/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from './components/advertisement-list/sidebar/sidebar-container/sidebar-container.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    CardExtraComponent,
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
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
