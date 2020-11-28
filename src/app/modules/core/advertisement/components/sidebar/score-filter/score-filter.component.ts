import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import * as _ from 'lodash'

@Component({
  selector: 'cav-score-filter',
  templateUrl: './score-filter.component.html',
  styleUrls: ['./score-filter.component.scss'],
})
export class ScoreFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<number>()
  selectedScore: number

  constructor() {}

  ngOnInit(): void {}

  emitScoreFilter(value: string): void {
    this.filter.emit(_.toNumber(value))
  }

  resetFilter(): void {
    this.selectedScore = null
    this.filter.emit(null)
  }
}
