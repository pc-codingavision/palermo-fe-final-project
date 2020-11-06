import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../../../../mock-advertisement/mock-advertisement'
import { PropertyService } from './../../../../../services/property.service'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {}

  /* getFacilitiesById(): Observable<IFacilities> {
    return this.propertyService
      .findById(1)
      .pipe(map((property) => property.facilities.tv))
  }*/
}
