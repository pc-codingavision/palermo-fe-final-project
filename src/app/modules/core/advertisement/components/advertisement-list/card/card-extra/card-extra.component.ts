import { Component, Input, OnInit } from '@angular/core'

import { IAdvertisement } from './../../../../../../../shared/models/advertisement'
import { IProperty } from './../../../../../../../shared/models/property'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() property: IProperty
  @Input() advertisements: IAdvertisement

  constructor() {}

  ngOnInit(): void {}
}
