import { Component, Input, OnInit } from '@angular/core'
import { IMockReview } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IMockReview
  constructor() {}

  ngOnInit(): void {}
}
