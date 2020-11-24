import { Component, Input, OnInit, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IReview, IReviewConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview
  @Input() config: IReviewConfig
  @Output() newReview = new EventEmitter<IReview>()
  score: number
  reviewForm: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.score = Math.round(this.review?.vote)
    this.reviewForm = this.fb.group({
      title: [
        { value: this.review?.title, disabled: !this.config?.writable },
        [Validators.required, Validators.minLength(5)],
      ],
      description: [
        { value: this.review?.description, disabled: !this.config?.writable },
        [Validators.required, Validators.minLength(10)],
      ],
    })
  }

  counter(i: number): number[] {
    if (i) {
      return new Array(i)
    }
  }

  setScore(score: number): void {
    if (this.config?.writable) {
      this.score = score
    }
  }

  save(): void {
    this.newReview.emit({
      title: this.reviewForm.value.title,
      description: this.reviewForm.value.description,
      vote: this.score,
      tenantId: this.review.tenantId,
    })
  }
}
