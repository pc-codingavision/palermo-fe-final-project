import { Component, Input, OnInit } from '@angular/core'
import {
  IMockAdvertisement,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  showCardExtra = false

  adv: IMockAdvertisement[]

  constructor() {}

  ngOnInit(): void {}

  expandCardExtra(): void {
    this.showCardExtra = !this.showCardExtra
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
