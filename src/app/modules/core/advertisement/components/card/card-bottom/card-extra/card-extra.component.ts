import { Component, Input, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ReviewDialogComponent } from '@modules/core/advertisement/components/card/card-bottom/review-dialog/review-dialog.component'
import {
  MockAdvertisement,
  MockReview,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { DialogService } from '@shared/services/dialog.service'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  sortedReviews: MockReview[]
  constructor(private dialogService: DialogService, public media: MediaObserver) {}

  ngOnInit(): void {
    this.sortReviews()
  }

  showAllReviews(): void {
    this.dialogService.openCustomDialog(
      ReviewDialogComponent,
      this.advertisement?.reviews
    )
  }

  sortReviews(): void {
    this.sortedReviews = this.advertisement?.reviews.sort(
      (a, b) => b.date.getTime() - a.date.getTime()
    )
  }
}
