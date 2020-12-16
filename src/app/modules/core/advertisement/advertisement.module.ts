import { CommonModule } from '@angular/common'
import { LOCALE_ID, NgModule } from '@angular/core'
import { AdvertisementRoutingModule } from '@modules/core/advertisement/advertisement-routing.module'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { AdvertisementContainerComponent } from '@modules/core/advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementDetailsComponent } from '@modules/core/advertisement/components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from '@modules/core/advertisement/components/advertisement-list/advertisement-list.component'
import { AboutComponent } from '@modules/core/advertisement/components/card/card-bottom/about/about.component'
import { CardExtraComponent } from '@modules/core/advertisement/components/card/card-bottom/card-extra/card-extra.component'
import { FacilitiesComponent } from '@modules/core/advertisement/components/card/card-bottom/facilities/facilities.component'
import { ReviewComponent } from '@modules/core/advertisement/components/card/card-bottom/review/review.component'
import { CardMainContainerComponent } from '@modules/core/advertisement/components/card/card-top/card-main-container/card-main-container.component'
import { CheckInCheckOutComponent } from '@modules/core/advertisement/components/card/card-top/check-in-check-out/check-in-check-out.component'
import { FacilityComponent } from '@modules/core/advertisement/components/card/card-top/facility/facility.component'
import { FavouriteComponent } from '@modules/core/advertisement/components/card/card-top/favourite/favourite.component'
import { PhotogalleryComponent } from '@modules/core/advertisement/components/card/card-top/photogallery/photogallery.component'
import { ScoreComponent } from '@modules/core/advertisement/components/card/card-top/score/score.component'
import { LatestContainerComponent } from '@modules/core/advertisement/components/latest/latest-container/latest-container.component'
import { LatestMiniCardComponent } from '@modules/core/advertisement/components/latest/latest-mini-card/latest-mini-card.component'
import { FacilityFilterComponent } from '@modules/core/advertisement/components/sidebar/facility-filter/facility-filter.component'
import { PriceFilterComponent } from '@modules/core/advertisement/components/sidebar/price-filter/price-filter.component'
import { ScoreFilterComponent } from '@modules/core/advertisement/components/sidebar/score-filter/score-filter.component'
import { SidebarContainerComponent } from '@modules/core/advertisement/components/sidebar/sidebar-container/sidebar-container.component'
import { SharedModule } from '@modules/shared/shared.module'

import { ReviewDialogComponent } from './components/card/card-bottom/review-dialog/review-dialog.component'
import { NewReservationComponent } from './components/reservation/new-reservation/new-reservation.component'

const advertisementsComponent = [
  AdvertisementListComponent,
  AdvertisementContainerComponent,
  AdvertisementDetailsComponent,
  CardExtraComponent,
  ReviewComponent,
  AboutComponent,
  CardMainContainerComponent,
  PhotogalleryComponent,
  FacilityComponent,
  FavouriteComponent,
  ScoreComponent,
  CheckInCheckOutComponent,
  SidebarContainerComponent,
  ScoreFilterComponent,
  FacilityFilterComponent,
  LatestContainerComponent,
  LatestMiniCardComponent,
  PriceFilterComponent,
  FacilitiesComponent,
  ReviewDialogComponent,
  NewReservationComponent,
]

@NgModule({
  declarations: [...advertisementsComponent],
  imports: [CommonModule, AdvertisementRoutingModule, SharedModule],
  providers: [AdvertisementService, { provide: LOCALE_ID, useValue: 'it-IT' }],
})
export class AdvertisementModule {}
