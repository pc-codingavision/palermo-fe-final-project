import { Component, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { IFacilities } from '@shared/models/property'
import { Observable } from 'rxjs'

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
    this.advertisementService.getAdvertisementsFilteredByPrice(filter)
  }

  applyFacilityFilter(filter: IFacilities): void {
    this.advertisementService.getAdvertisementsFilteredByFacilities(filter)
  }

  applyScoreFilter(filter: number): void {
    this.advertisementService.getAdvertisementsFilteredByScore(filter)
  }
}
