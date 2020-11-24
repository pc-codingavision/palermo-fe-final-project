import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { IMockReview } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IMockReview
  @Input() config: IReviewConfig
  score: number
  title = new FormControl(this.review?.title)
  description = new FormControl(this.review?.description)

  constructor() {}

  ngOnInit(): void {
    this.score = Math.round(this.review?.vote)
  }

  counter(i: number): number[] {
    return new Array(i)
  }

  getValue(value: number): void {
    this.score = value
  }
}

export interface IReviewConfig {
  writable: boolean
  minScore: number
  maxScore: number
  scoreSymbol: string
}
