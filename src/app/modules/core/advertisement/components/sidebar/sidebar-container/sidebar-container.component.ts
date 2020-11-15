import { Component, Input, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { IFacilities } from '@shared/models/property'

@Component({
  selector: 'cav-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  @Input() maxPrice: number
  @Input() minPrice: number

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {}

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
