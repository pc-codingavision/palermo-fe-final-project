import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() config: IScoreConfig = {
    writable: false,
    minScore: 0,
    maxScore: 0,
    scoreIcon: Icon.Star,
    score: 0,
  }
  @Output() scoreValue = new EventEmitter<number>()
  score: number
  iconFill: string
  iconOutline: string

  constructor() {}

  ngOnInit(): void {
    this.score = this.config?.score
      ? Math.round(this.config?.score)
      : this.config?.minScore
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
    if (i >= 0) {
      return new Array(i)
    } else {
      this.score = this.config?.minScore
      return new Array(0)
    }
  }

  setScore(score: number): void {
    if (this.config?.writable) {
      this.score = score
      this.scoreValue.emit(this.score)
    }
  }
}
