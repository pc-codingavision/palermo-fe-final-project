import { map } from 'rxjs/operators'
import { Property } from 'src/app/shared/models/property'
import { Observable } from 'rxjs'
import { PropertiesService } from './../../../../../services/properties.service'
import { Component, OnInit } from '@angular/core'

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
