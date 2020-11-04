import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-score-filter',
  templateUrl: './score-filter.component.html',
  styleUrls: ['./score-filter.component.scss'],
})
export class ScoreFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  emitFilter(value: number): void {
    this.filter.emit(value)
  }
}
