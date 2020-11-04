import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { LOCALE_ID } from '@angular/core'
import { AdvertisementRoutingModule } from '@modules/core/advertisement/advertisement-routing.module'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from '@modules/core/advertisement/components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from '@modules/core/advertisement/components/advertisement-list/advertisement-list.component'
import { CardContainerComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-container/card-container.component'
import { AboutComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-extra/about/about.component'
import { CardExtraComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-extra/card-extra.component'
import { FacilitiesComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-extra/facilities/facilities.component'
import { ReviewComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-extra/review/review.component'
import { CardMainViewComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/card-main-view.component'
import { FacilitiesContainerComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/facilities-container/facilities-container.component'
import { FacilityComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/facilities-container/facility/facility.component'
import { FavouriteComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/favourite/favourite.component'
import { PhotogalleryComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/photogallery/photogallery.component'
import { ScoreComponent } from '@modules/core/advertisement/components/advertisement-list/card/card-main-view/score/score.component'
import { LatestContainerComponent } from '@modules/core/advertisement/components/advertisement-list/latest/latest-container/latest-container.component'
import { LatestMiniCardComponent } from '@modules/core/advertisement/components/advertisement-list/latest/latest-mini-card/latest-mini-card.component'
import { FacilityFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/sidebar-container/sidebar-container.component'

import { SharedModule } from './../../shared/shared.module'
import { AdvertisementService } from './advertisement.service'
import { CheckInCheckOutComponent } from './components/advertisement-list/card/card-main-view/check-in-check-out/check-in-check-out.component'

const advertisementsComponent = [
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
  CheckInCheckOutComponent,
  SidebarContainerComponent,
  PriceFilterComponent,
  FacilityFilterComponent,
  ScoreFilterComponent,
  LatestContainerComponent,
  LatestMiniCardComponent,
]

@NgModule({
  declarations: [...advertisementsComponent],
  imports: [CommonModule, AdvertisementRoutingModule, SharedModule],
  providers: [AdvertisementService, { provide: LOCALE_ID, useValue: 'en-EN' }],
})
export class AdvertisementModule {}
