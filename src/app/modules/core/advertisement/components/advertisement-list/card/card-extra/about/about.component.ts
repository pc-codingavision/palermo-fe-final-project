import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { PropertiesService } from './../../../../../services/properties.service'
import { Component, OnInit } from '@angular/core'
import { Property } from 'src/app/shared/models/property'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {}

  getProperties(): Observable<Property[]> {
    return this.propertiesService.findAll()
  }

  getPropertyById(id: number): Observable<Property> {
    return this.propertiesService.findById(id)
  }

  getDescriptionById(): Observable<any> {
    return this.propertiesService
      .findById(1)
      .pipe(map((property) => `${property.description}`))
  }
}
