import { Component, Input, OnInit } from '@angular/core'

import { Property } from './../../../../../../../shared/models/property'
import { MockAdvertisement } from './../../../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
