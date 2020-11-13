import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}

  maxPrice: Observable<number>
  minPrice: Observable<number>

  ngOnInit(): void {
    this.maxPrice = this.getMaxPrice()
    this.minPrice = this.getMinPrice()
  }

  getMaxPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsHighestPrice()
  }

  getMinPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsLowestPrice()
  }

  applyPriceFilter(filter: number): void {
    this.advertisementService.returnPriceFilteredAdvertisements(filter)
  }

  applyFacilityFilter(filter: object): void {
    console.log(`Value received from facility: ${JSON.stringify(filter)}`)
  }

  applyScoreFilter(filter: object): void {
    console.log(`Value received from score: ${filter}`)
  }
}