import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from './../../shared/material.module'
import { AdvertisementContainerComponent } from './../advertisement/components/advertisement-container/advertisement-container.component'
import { AdvertisementRoutingModule } from './advertisement-routing.module'
import { AdvertisementDetailsComponent } from './components/advertisement-details/advertisement-details.component'
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component'
import { FacilityFilterComponent } from './components/advertisement-list/sidebar-container/facility-filter/facility-filter.component'
import { PriceFilterComponent } from './components/advertisement-list/sidebar-container/price-filter/price-filter.component'
import { ScoreFilterComponent } from './components/advertisement-list/sidebar-container/score-filter/score-filter.component'
import { SidebarContainerComponent } from './components/advertisement-list/sidebar-container/sidebar-container.component'
import { LatestContainerComponent } from './components/advertisement-list/latest-container/latest-container.component'
import { LatestMiniCardComponent } from './components/advertisement-list/latest-container/latest-mini-card/latest-mini-card.component'

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
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
