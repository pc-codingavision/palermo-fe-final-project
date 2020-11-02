import { Component, OnInit } from '@angular/core'
import { Advertisement } from 'src/app/shared/models/advertisement'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}

  maxPriceAdvertisement: Advertisement[]
  minPriceAdvertisement: Advertisement[]
  maxPrice: number
  minPrice: number

  ngOnInit(): void {
    this.maxPrice = this.returnMaxPrice()
    this.minPrice = this.returnMinPrice()
  }

  returnMaxPrice(): number {
    this.advertisementService
      .returnMaxPriceProperty()
      .subscribe(
        (maxPriceAdvertisement) => (this.maxPriceAdvertisement = maxPriceAdvertisement)
      )
    const maxPricestring = this.maxPriceAdvertisement.map((x) => x.price).toString()
    return parseInt(maxPricestring, 0)
  }

  returnMinPrice(): number {
    this.advertisementService
      .returnMinPriceProperty()
      .subscribe(
        (minPriceAdvertisement) => (this.minPriceAdvertisement = minPriceAdvertisement)
      )
    const minPricestring = this.minPriceAdvertisement.map((x) => x.price).toString()
    return parseInt(minPricestring, 0)
  }

  applyPriceFilter(filter: number): void {
    console.log(`Value received from slider: ${filter}`)
  }

  applyFacilityFilter(filter: object): void {
    console.log(`Value received from facility: ${JSON.stringify(filter)}`)
  }

  applyScoreFilter(filter: object): void {
    console.log(`Value received from score: ${filter}`)
  }
}
