import { Component, OnInit } from '@angular/core'
import { IFacilities } from '@shared/models/property'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PropertyService } from './../../../../../services/property.service'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {}

  getFacilitiesById(): Observable<IFacilities> {
    return this.propertyService
      .findById(1)
      .pipe(map((property) => property.facilities.tv))
  }
}
