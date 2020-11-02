import { Component, OnInit } from '@angular/core'

import { PropertyService } from './../../../../services/property.service'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {}
}
