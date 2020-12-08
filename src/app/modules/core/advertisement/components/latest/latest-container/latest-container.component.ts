import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-latest-container',
  templateUrl: './latest-container.component.html',
  styleUrls: ['./latest-container.component.scss'],
})
export class LatestContainerComponent implements OnInit {
  @Input() advertisements: IMockAdvertisement[]
  start = 0
  end = 5

  constructor() {}

  ngOnInit(): void {}

  goForward(): void {
    if (this.end < this.advertisements.length) {
      this.start++
      this.end++
    } else {
      this.start = 0
      this.end = 5
    }
  }

  goBehind(): void {
    if (this.start !== 0) {
      this.start--
      this.end--
    } else {
      this.start = this.advertisements.length - 5
      this.end = this.advertisements.length
    }
  }
}
