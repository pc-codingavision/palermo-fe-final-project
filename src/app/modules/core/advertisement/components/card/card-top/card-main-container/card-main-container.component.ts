import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  @Output() ratingValue = new EventEmitter<number>()
  show = false

  constructor() {}

  ngOnInit(): void {}

  onValue(rating: number): void {
    this.ratingValue.emit(rating)
  }

  changeStatus(): void {
    this.show = !this.show
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
