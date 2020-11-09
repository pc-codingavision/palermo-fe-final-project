import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() rating = 2
  @Input() itemId: number
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>()

  inputName: string
  constructor() {}

  ngOnInit(): void {
    this.inputName = this.itemId + '_rating'
  }
  onClick(rating: number): void {}
}
