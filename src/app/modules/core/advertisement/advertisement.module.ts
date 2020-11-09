import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AdvertisementRoutingModule } from '@modules/core/advertisement/advertisement-routing.module'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from '@modules/core/advertisement/components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from '@modules/core/advertisement/components/advertisement-list/advertisement-list.component'
import { LatestContainerComponent } from '@modules/core/advertisement/components/advertisement-list/latest/latest-container/latest-container.component'
import { LatestMiniCardComponent } from '@modules/core/advertisement/components/advertisement-list/latest/latest-mini-card/latest-mini-card.component'
import { FacilityFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from '@modules/core/advertisement/components/advertisement-list/sidebar/sidebar-container/sidebar-container.component'
import { AboutComponent } from '@modules/core/advertisement/components/card/card-bottom/about/about.component'
import { CardExtraComponent } from '@modules/core/advertisement/components/card/card-bottom/card-extra/card-extra.component'
import { FacilitiesComponent } from '@modules/core/advertisement/components/card/card-bottom/facilities/facilities.component'
import { ReviewComponent } from '@modules/core/advertisement/components/card/card-bottom/review/review.component'
import { CardMainContainerComponent } from '@modules/core/advertisement/components/card/card-top/card-main-container/card-main-container.component'
import { CheckInCheckOutComponent } from '@modules/core/advertisement/components/card/card-top/check-in-check-out/check-in-check-out.component'
import { FacilitiesContainerComponent } from '@modules/core/advertisement/components/card/card-top/facilities-container/facilities-container.component'
import { FacilityComponent } from '@modules/core/advertisement/components/card/card-top/facilities-container/facility/facility.component'
import { FavouriteComponent } from '@modules/core/advertisement/components/card/card-top/favourite/favourite.component'
import { PhotogalleryComponent } from '@modules/core/advertisement/components/card/card-top/photogallery/photogallery.component'
import { ScoreComponent } from '@modules/core/advertisement/components/card/card-top/score/score.component'
import { SharedModule } from '@modules/shared/shared.module'

const advertisementsComponent = [
  AdvertisementListComponent,
  AdvertisementContainerComponent,
  AdvertisementDetailsComponent,
  CardExtraComponent,
  ReviewComponent,
  AboutComponent,
  FacilitiesComponent,
  CardMainContainerComponent,
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
})
export class AdvertisementModule {}
