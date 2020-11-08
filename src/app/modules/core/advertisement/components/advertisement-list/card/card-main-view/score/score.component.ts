import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { StarRatingComponent } from 'ng-starrating'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  @Input() rating = 2
  @Input() itemId: number
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>()

  inputName: string
  constructor() {}

  ngOnInit(): void {}

  onRate($event: {
    oldValue: number
    newValue: number
    starRating: StarRatingComponent
  }) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`)
  }
}
