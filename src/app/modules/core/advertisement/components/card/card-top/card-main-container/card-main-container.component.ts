import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  score: number
  showCardExtra = false

  constructor() {}

  ngOnInit(): void {
    this.score = _.round(_.mean(this.advertisement?.reviews.map((review) => review.vote)))
  }

  changeStatus(): void {
    this.showCardExtra = !this.showCardExtra
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
