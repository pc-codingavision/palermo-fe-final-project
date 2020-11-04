import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Property } from 'src/app/shared/models/property'

import {
  Advertisement,
  IAdvertisement,
} from './../../../../../../../shared/models/advertisement'
import { PropertyService } from './../../../../services/property.service'

@Component({
  selector: 'cav-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  @Input() advertisements: IAdvertisement[]
  property: Observable<Property>
  advertisement: Observable<Advertisement>
  id = 1
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.property = this.getDescriptionById()
  }

  getDescriptionById(): Observable<Property> {
    return this.propertyService.findById(this.id)
  }
}
