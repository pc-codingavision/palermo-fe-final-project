import { Component, Input, OnInit } from '@angular/core'
import { IMockReview } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  constructor() {}
  @Input() review: IMockReview

  score: number

  ngOnInit(): void {
    this.score = Math.round(this.review?.vote)
  }
}
