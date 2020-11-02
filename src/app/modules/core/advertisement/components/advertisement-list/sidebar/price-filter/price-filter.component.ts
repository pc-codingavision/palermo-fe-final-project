import { formatCurrency } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { Advertisement } from 'src/app/shared/models/advertisement'

import { AdvertisementService } from '../../../../advertisement.service'

@Component({
  selector: 'cav-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  constructor(private advertisementService: AdvertisementService) {}
  maxPriceAdvertisement: Advertisement[]
  minPriceAdvertisement: Advertisement[]
  maxPrice: number
  minPrice: number

  ngOnInit(): void {
    this.maxPrice = this.returnMaxPrice()
    this.minPrice = this.returnMinPrice()
  }

  formatLabel(value: number): string {
    return formatCurrency(value, 'en', '€', '', '.0')
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
}
