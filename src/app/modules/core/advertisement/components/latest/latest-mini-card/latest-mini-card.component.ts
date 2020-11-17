import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement

  constructor() {}

  ngOnInit(): void {}
}
