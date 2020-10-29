import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from '../../shared/material.module'
import { AdvertisementContainerComponent } from '../advertisement/components/advertisement-container/advertisement-container.component'
import { LatestContainerComponent } from '../advertisement/components/advertisement-list/latest-container/latest-container.component'
import { DatesComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/dates/dates.component'
import { FacilityComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/facilities-container/facility/facility.component'
import { ScoreComponent } from '../advertisement/components/advertisement-list/properties-container/card-container/card-main-view/score/score.component'
import { PropertiesContainerComponent } from '../advertisement/components/advertisement-list/properties-container/properties-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { LatestMiniCardComponent } from './components/advertisement-list/latest-container/latest-mini-card/latest-mini-card.component'
import { AboutComponent } from './components/advertisement-list/properties-container/card-container/card-extra/about/about.component'
import { CardExtraComponent } from './components/advertisement-list/properties-container/card-container/card-extra/card-extra.component'
import { FacilitiesComponent } from './components/advertisement-list/properties-container/card-container/card-extra/facilities/facilities.component'
import { ReviewComponent } from './components/advertisement-list/properties-container/card-container/card-extra/review/review.component'
import { BookButtonComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/book-button/book-button.component'
import { CardMainViewComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/card-main-view.component'
import { FacilitiesContainerComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/facilities-container/facilities-container.component'
import { FavouriteComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/favourite/favourite.component'
import { PhotogalleryComponent } from './components/advertisement-list/properties-container/card-container/card-main-view/photogallery/photogallery.component'
import { CardComponent } from './components/advertisement-list/properties-container/card-container/card.component'
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

    ReviewComponent,
    AboutComponent,
    FacilitiesComponent,
    CardComponent,
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
