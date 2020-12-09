import { Component, Input, OnChanges, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-latest-container',
  templateUrl: './latest-container.component.html',
  styleUrls: ['./latest-container.component.scss'],
})
export class LatestContainerComponent implements OnInit, OnChanges {
  @Input() advertisements: IMockAdvertisement[]
  // tslint:disable-next-line:variable-name
  private _maxAdv: number
  latestAdvertisements: IMockAdvertisement[]
  start = 0
  end = 5

  @Input() set maxAdv(maxAdv: number) {
    if (maxAdv > 5) {
      this._maxAdv = maxAdv
    } else {
      this._maxAdv = 5
    }
  }

  get maxAdv(): number {
    return this._maxAdv
  }

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.latestAdvertisements = this.advertisements.slice(0, this.maxAdv)
  }

  goForward(): void {
    if (this.end < this.latestAdvertisements.length) {
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
      this.start = this.latestAdvertisements.length - 5
      this.end = this.latestAdvertisements.length
    }
  }
}
