import { Component, Input, OnInit } from '@angular/core'
import {
  IMockAdvertisement,
  IMockReview,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  @Input() reviews: IMockReview[]
  score: number

  constructor() {}

  ngOnInit(): void {
    this.score = _.round(_.mean(this.reviews.map((review) => review.vote)))
  }
}
