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

@NgModule({
  declarations: [
    AdvertisementListComponent,
    AdvertisementContainerComponent,
    AdvertisementDetailsComponent,
    SidebarContainerComponent,
    PriceFilterComponent,
    FacilityFilterComponent,
    ScoreFilterComponent,
  ],

  imports: [CommonModule, AdvertisementRoutingModule, MaterialModule, FlexLayoutModule],
})
export class AdvertisementModule {}
