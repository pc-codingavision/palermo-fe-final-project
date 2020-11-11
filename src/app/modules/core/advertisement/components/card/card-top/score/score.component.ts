import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import mean from 'lodash/mean'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() rating = mean([5, 2, 3, 4])
  @Input() itemId: number
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>()

  inputName: string
  constructor() {}

  ngOnInit(): void {
    this.inputName = this.itemId + '_rating'
    console.log(mean([5, 50, 10, 20])) // inserire mean all'interno di rating e passare le ads
  }
  onClick(rating: number): void {}
}
