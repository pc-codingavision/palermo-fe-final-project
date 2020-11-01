import { Component, OnInit } from '@angular/core'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-latest-container',
  templateUrl: './latest-container.component.html',
  styleUrls: ['./latest-container.component.scss'],
})
export class LatestContainerComponent implements OnInit {
  constructor(private advService: AdvertisementService) {}

  ngOnInit(): void {}
}
