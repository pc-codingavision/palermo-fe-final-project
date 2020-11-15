import { Component, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisements: Observable<IMockAdvertisement[]>
  minPrice: Observable<number>
  maxPrice: Observable<number>

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.advertisements = this.advertisementService.findAll()
    this.minPrice = this.getMinPrice()
    this.maxPrice = this.getMaxPrice()
  }

  getMinPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsLowestPrice(this.advertisements)
  }

  getMaxPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsHighestPrice(this.advertisements)
  }
}
