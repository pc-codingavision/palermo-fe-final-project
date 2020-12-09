import { Component, Input, OnInit } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  boxShadow = 'yellow'
  //boxShadow = '5px 10px #888888'

  @Input() advertisement: MockAdvertisement
  showCardExtra = false
  scoreConfig: IScoreConfig

  constructor() {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: false,
      minScore: 0,
      maxScore: 5,
      score: this.advertisement?.score,
      scoreIcon: Icon.Star,
    }
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
