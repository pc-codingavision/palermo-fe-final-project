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

  applyFilter(filter: number | IFacilities): void {
    this.advertisementService.sidebarFilter.next(filter)
  }
}
