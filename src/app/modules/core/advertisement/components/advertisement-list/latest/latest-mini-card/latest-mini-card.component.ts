import { Component, OnInit } from '@angular/core'
import { PROPERTIES_MOCK_DATA } from '@shared/models/mock-data/data'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  constructor() {}

  properties = PROPERTIES_MOCK_DATA

  ngOnInit(): void {}
}
