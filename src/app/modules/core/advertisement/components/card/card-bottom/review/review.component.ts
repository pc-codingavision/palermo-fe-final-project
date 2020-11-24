import { Component, Input, OnInit, Output } from '@angular/core'
import { EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Icon } from '@shared/enum/enums'
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
  iconFill: string
  iconOutline: string

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.score = Math.round(this.review?.vote)
    this.reviewForm = this.fb.group({
      title: [
        { value: this.review?.title, disabled: !this.config?.writable },
        [Validators.required, Validators.minLength(4)],
      ],
      description: [
        { value: this.review?.description, disabled: !this.config?.writable },
        [Validators.required, Validators.minLength(10)],
      ],
    })
    this.setIcon()
  }

  setIcon(): void {
    switch (this.config?.scoreIcon) {
      case Icon.CheckBox:
        this.iconFill = 'check_box'
        this.iconOutline = 'check_box_outline_blank'
        break
      case Icon.Circle:
        this.iconFill = 'lens'
        this.iconOutline = 'panorama_fish_eye'
        break
      case Icon.Heart:
        this.iconFill = 'favorite'
        this.iconOutline = 'favorite_border'
        break
      case Icon.Radio:
        this.iconFill = 'radio_button_checked'
        this.iconOutline = 'radio_button_unchecked'
        break
      default:
        this.iconFill = 'star'
        this.iconOutline = 'star_outline'
    }
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
