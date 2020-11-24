import { Component, OnInit } from '@angular/core'
import { SidebarService } from '@modules/core/advertisement/services/sidebar.service'
import { IFacility } from '@shared/models/property'

@Component({
  selector: 'cav-sidebar-container',
  templateUrl: './sidebar-container.component.html',
  styleUrls: ['./sidebar-container.component.scss'],
})
export class SidebarContainerComponent implements OnInit {
  maxPrice: number
  minPrice: number

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarService.priceRangeChanged$.subscribe((result) => {
      if (result != null) {
        this.minPrice = result.minPrice
        this.maxPrice = result.maxPrice
      }
    })
  }

  onPriceSelected(price: number) {
    this.sidebarService.price$.next(price)
  }

  onFacilitySelected(facility: IFacility) {
    this.sidebarService.facility$.next(facility)
  }

  onScoreSelected(score: number) {
    this.sidebarService.score$.next(score)
  }
}
