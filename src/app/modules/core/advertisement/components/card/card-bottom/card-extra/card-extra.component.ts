import { Component, Input, OnInit } from '@angular/core'
import { ReviewDialogComponent } from '@modules/core/advertisement/components/card/card-bottom/review-dialog/review-dialog.component'
import {
  IMockAdvertisement,
  IMockReview,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { DialogService } from '@shared/services/dialog.service'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  sortedReviews: IMockReview[]
  constructor(private dialogService: DialogService) {}

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

  showAllReviews(): void {
    this.dialogService.openCustomDialog(ReviewDialogComponent, this.advertisement.reviews)
  }
}
