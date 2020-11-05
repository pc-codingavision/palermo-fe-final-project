import { Component, Input, OnInit } from '@angular/core'

import { Advertisement } from './../../../../../../../shared/models/advertisement'
import { Property } from './../../../../../../../shared/models/property'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() property: Property
  @Input() advertisement: Advertisement

  constructor() {}

  ngOnInit(): void {}
}
