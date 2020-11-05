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
  @Input() advertisement: Advertisement

  constructor(

  ) {}

  ngOnInit(): void {

  }


  }
}
