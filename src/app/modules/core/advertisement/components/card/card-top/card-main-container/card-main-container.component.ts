import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  show = false

  constructor() {}

  ngOnInit(): void {}

  changeStatus(): void {
    this.show = !this.show
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
