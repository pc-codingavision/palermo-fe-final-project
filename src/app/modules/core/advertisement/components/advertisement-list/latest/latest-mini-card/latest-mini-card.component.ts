import { Component, Input, OnInit } from '@angular/core'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  constructor(private advService: AdvertisementService) {}

  @Input() latest

  ngOnInit(): void {
    this.latest = this.advService.getLatestAdv()
  }
}
