import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IMockReview } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() reviews: IMockReview[]
  @Output() ratingValue = new EventEmitter<number>()
  score: number
  constructor() {}

  ngOnInit(): void {
    this.score = _.round(_.mean(this.reviews.map((review) => review.vote)))
  }

  onClick(rating: number): void {
    this.ratingValue.emit(rating)
  }
}
