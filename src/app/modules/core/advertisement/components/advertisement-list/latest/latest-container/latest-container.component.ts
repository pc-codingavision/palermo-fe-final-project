import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { AdvertisementService } from './../../../../advertisement.service'

@Component({
  selector: 'cav-latest-container',
  templateUrl: './latest-container.component.html',
  styleUrls: ['./latest-container.component.scss'],
})
export class LatestContainerComponent implements OnInit {
  constructor(private advService: AdvertisementService) {}
  start = 0
  end = 2

  latest: Observable<any[]>

  ngOnInit(): void {
    this.latest = this.advService.getLatestAdv()
  }

  goForward(): void {
    if (this.end !== 3) {
      this.start++
      this.end++
      this.latest = this.advService.getLatestAdv(this.start, this.end)
    } else if (this.end === 3) {
      this.start = 0
      this.end = 2
      this.latest = this.advService.getLatestAdv()
    }
  }

  goBehind(): void {
    if (this.start !== 0) {
      this.start--
      this.end--
      this.latest = this.advService.getLatestAdv(this.start, this.end)
    }
  }
}
