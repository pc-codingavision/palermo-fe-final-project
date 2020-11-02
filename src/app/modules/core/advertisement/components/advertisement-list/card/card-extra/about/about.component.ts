import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PropertyService } from './../../../../../services/property.service'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {}

  // getProperties(): Observable<Property[]> {
  //   return this.propertyService.findAll()
  // }

  // getPropertyById(id: number): Observable<Property> {
  //   return this.propertyService.findById(id)
  // }

  getDescriptionById(): Observable<any> {
    return this.propertyService.findById(1).pipe(map((property) => property.description))
  }
}
