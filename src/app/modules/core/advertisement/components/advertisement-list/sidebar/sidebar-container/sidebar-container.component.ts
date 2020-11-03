import { Component, OnInit } from '@angular/core'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}

  maxPrice: number
  minPrice: number

  ngOnInit(): void {
    this.getMaxPrice()
    this.getMinPrice()
  }

  getMaxPrice(): void {
    this.advertisementService
      .findAdvertisementsHighestPrice()
      .subscribe((maxPrice) => (this.maxPrice = maxPrice))
  }

  getMinPrice(): void {
    this.advertisementService
      .findAdvertisementsLowestPrice()
      .subscribe((minPrice) => (this.minPrice = minPrice))
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
