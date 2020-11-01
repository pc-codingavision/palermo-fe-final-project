import { Component, OnInit } from '@angular/core'

import { PROPERTIES } from './../../../../../../../shared/models/mock-data/mock-property'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  constructor() {}

  properties = PROPERTIES

  ngOnInit(): void {}
}
