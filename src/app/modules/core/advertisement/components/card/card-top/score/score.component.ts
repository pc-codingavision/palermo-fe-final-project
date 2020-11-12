import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() score: number
  @Output() ratingValue = new EventEmitter<number>()
  constructor() {}

  ngOnInit(): void {}

  onClick(rating: number): void {
    this.ratingValue.emit(rating)
  }
}
