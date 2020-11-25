import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Icon } from '@shared/enum/enums'
import { IReview, IScoreConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() review: IReview
  @Input() isWritable: boolean
  @Output() newReview = new EventEmitter<IReview>()
  reviewForm: FormGroup
  scoreConfig: IScoreConfig

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: this.isWritable,
      minScore: 0,
      maxScore: 5,
      scoreIcon: Icon.Star,
      score: this.review?.vote,
    }
    this.setForm()
  }

  setForm(): void {
    this.reviewForm = this.fb.group({
      title: [
        { value: this.review?.title, disabled: !this.isWritable },
        [Validators.required, Validators.minLength(4)],
      ],
      description: [
        { value: this.review?.description, disabled: !this.isWritable },
        [Validators.required, Validators.minLength(10)],
      ],
    })
  }

  save(): void {
    this.newReview.emit({
      title: this.reviewForm?.value?.title,
      description: this.reviewForm?.value?.description,
      vote: this.review?.vote,
      tenantId: this.review?.tenantId,
    })
  }
}
