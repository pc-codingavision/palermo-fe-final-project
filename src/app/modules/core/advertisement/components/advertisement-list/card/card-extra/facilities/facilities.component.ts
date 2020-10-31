import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Property } from 'src/app/shared/models/property'

import { PropertiesService } from './../../../../../services/properties.service'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {}

  getPropertyById(id: number): Observable<Property> {
    return this.propertiesService.findById(id)
  }

  getFacilitiesById(): Observable<any> {
    return this.propertiesService.findById(1).pipe(map((property) => property.facilities))
  }
}
