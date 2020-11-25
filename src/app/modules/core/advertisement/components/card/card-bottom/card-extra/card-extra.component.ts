import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Icon } from '@shared/enum/enums'
import { IReviewConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  reviewConfig: IReviewConfig = {
    writable: false,
    minScore: 0,
    maxScore: 5,
    scoreIcon: Icon.Star,
  }
  constructor() {}

  ngOnInit(): void {}
}
