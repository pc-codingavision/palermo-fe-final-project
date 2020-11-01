import { Component, OnInit } from '@angular/core'
import { Advertisement } from 'src/app/shared/models/advertisement'

import { AdvertisementService } from '../../../../advertisement.service'

@Component({
  selector: 'cav-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  maxPriceAdvertisement: Advertisement[]
  minPriceAdvertisement: Advertisement[]
  maxPrice: number
  minPrice: number
  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.maxPrice = this.returnMaxPrice()
    this.minPrice = this.returnMinPrice()
  }

  formatLabel(value: number): string {
    return value + '€'
  }

  returnMaxPrice(): number {
    this.advertisementService
      .returnMaxPriceProperty()
      .subscribe(
        (maxPriceAdvertisement) => (this.maxPriceAdvertisement = maxPriceAdvertisement)
      )
    const string = this.maxPriceAdvertisement.map((x) => x.price).toString()
    return parseInt(string)
  }

  returnMinPrice(): number {
    this.advertisementService
      .returnMinPriceProperty()
      .subscribe(
        (minPriceAdvertisement) => (this.minPriceAdvertisement = minPriceAdvertisement)
      )
    const string = this.minPriceAdvertisement.map((x) => x.price).toString()
    return parseInt(string)
  }
}
