import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { PropertiesService } from './../../../../../services/properties.service'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {}

  // getProperties(): Observable<Property[]> {
  //   return this.propertiesService.findAll()
  // }

  // getPropertyById(id: number): Observable<Property> {
  //   return this.propertiesService.findById(id)
  // }

  getDescriptionById(): Observable<any> {
    return this.propertiesService
      .findById(1)
      .pipe(map((property) => property.description))
  }
}
