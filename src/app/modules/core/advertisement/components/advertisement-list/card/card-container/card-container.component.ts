import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Property } from 'src/app/shared/models/property'

import {
  Advertisement,
  IAdvertisement,
} from './../../../../../../../shared/models/advertisement'
import { AdvertisementService } from './../../../../advertisement.service'
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
  constructor(
    private propertyService: PropertyService,
    private advertisementService: AdvertisementService
  ) {}

  ngOnInit(): void {
    (this.property = this.getDescriptionById()),
      (this.advertisement = this.getReviewById())
  }

  getDescriptionById(): Observable<Property> {
    return this.propertyService.findById(this.id)
  }

  getReviewById(): Observable<Advertisement> {
    return this.advertisementService.findById(this.id)
  }
}
