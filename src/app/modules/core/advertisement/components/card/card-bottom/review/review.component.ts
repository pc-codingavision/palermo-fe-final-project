import { Component, Input, OnInit } from '@angular/core'
import { Icon } from '@shared/enum/enums'
import { IReview, IScoreConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview
  scoreConfig: IScoreConfig

  constructor() {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: false,
      minScore: 0,
      maxScore: 5,
      scoreIcon: Icon.Star,
      score: Math.round(this.review?.vote),
    }
  }
}
