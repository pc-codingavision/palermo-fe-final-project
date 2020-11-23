import { Component, OnInit } from '@angular/core'
import { SidebarService } from '@modules/core/advertisement/services/sidebar.service'
import { IFacilities } from '@shared/models/property'

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
    this.sidebarService.sidebarPrice.subscribe((result) => {
      this.minPrice = result.minPrice
      this.maxPrice = result.maxPrice
    })
  }

  applyFilter(filter: number | IFacilities): void {
    this.sidebarService.sidebarFilter.next(filter)
  }
}
