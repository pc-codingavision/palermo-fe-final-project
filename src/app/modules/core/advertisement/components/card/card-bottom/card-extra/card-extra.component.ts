import { Component, Input, OnInit } from '@angular/core'
import {
  IMockAdvertisement,
  IMockReview,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  sortedReviews: IMockReview[]
  constructor() {}

  ngOnInit(): void {
    this.sortedReviews = this.advertisement?.reviews
      .map((review) => {
        review.date = new Date(review.date)
        return review
      })
      // @ts-ignore
      .sort((a, b) => b.date?.getTime() - a.date?.getTime())
      .slice(0, 3)
  }
}
