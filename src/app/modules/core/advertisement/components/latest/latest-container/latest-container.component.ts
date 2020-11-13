import { Component, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-latest-container',
  templateUrl: './latest-container.component.html',
  styleUrls: ['./latest-container.component.scss'],
})
export class LatestContainerComponent implements OnInit {
  constructor(private advService: AdvertisementService) {}
  latestAdvertisements: Observable<IMockAdvertisement[]>
  start = 0
  end = 2

  ngOnInit(): void {
    this.latestAdvertisements = this.advService.getLatestAdv()
  }

  goForward(): void {
    if (this.end !== 3) {
      this.start++
      this.end++
      this.latestAdvertisements = this.advService.getLatestAdv(this.start, this.end)
    } else if (this.end === 3) {
      this.start = 0
      this.end = 2
      this.latestAdvertisements = this.advService.getLatestAdv()
    }
  }

  goBehind(): void {
    if (this.start !== 0) {
      this.start--
      this.end--
      this.latestAdvertisements = this.advService.getLatestAdv(this.start, this.end)
    }
  }
}
