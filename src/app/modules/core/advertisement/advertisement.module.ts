import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AdvertisementContainerComponent } from '../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from '../advertisement/components/advertisement-details/advertisement-details.component'
import { CardContainerComponent } from '../advertisement/components/advertisement-list/card/card-container/card-container.component'
import { CardExtraComponent } from '../advertisement/components/advertisement-list/card/card-extra/card-extra.component'
import { ReviewComponent } from '../advertisement/components/advertisement-list/card/card-extra/review/review.component'
import { CardMainViewComponent } from '../advertisement/components/advertisement-list/card/card-main-view/card-main-view.component'
import { DatapickerComponent } from '../advertisement/components/advertisement-list/card/card-main-view/datapicker/datapicker.component'
import { FacilitiesContainerComponent } from '../advertisement/components/advertisement-list/card/card-main-view/facilities-container/facilities-container.component'
import { FacilityComponent } from '../advertisement/components/advertisement-list/card/card-main-view/facilities-container/facility/facility.component'
import { FavouriteComponent } from '../advertisement/components/advertisement-list/card/card-main-view/favourite/favourite.component'
import { ScoreComponent } from '../advertisement/components/advertisement-list/card/card-main-view/score/score.component'
import { LatestContainerComponent } from '../advertisement/components/advertisement-list/latest/latest-container/latest-container.component'
import { LatestMiniCardComponent } from '../advertisement/components/advertisement-list/latest/latest-mini-card/latest-mini-card.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementService } from './advertisement.service'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { AboutComponent } from './components/advertisement-list/card/card-extra/about/about.component'
import { FacilitiesComponent } from './components/advertisement-list/card/card-extra/facilities/facilities.component'
import { PhotogalleryComponent } from './components/advertisement-list/card/card-main-view/photogallery/photogallery.component'
import { FacilityFilterComponent } from './components/advertisement-list/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from './components/advertisement-list/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from './components/advertisement-list/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from './components/advertisement-list/sidebar/sidebar-container/sidebar-container.component'

const advertisementComponent = [
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
  DatapickerComponent,
  SidebarContainerComponent,
  PriceFilterComponent,
  FacilityFilterComponent,
  ScoreFilterComponent,
  LatestContainerComponent,
  LatestMiniCardComponent,
]
@NgModule({
  declarations: [...advertisementComponent],

  imports: [CommonModule, AdvertisementRoutingModule],
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
