import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-facility-filter',
  templateUrl: './facility-filter.component.html',
  styleUrls: ['./facility-filter.component.scss'],
})
export class FacilityFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<object>()

  expanded = false

  constructor() {}

  ngOnInit(): void {}

  expand(): boolean {
    return (this.expanded = !this.expanded)
  }

  emitFilter(type: string, active: boolean): void {
    this.filter.emit({ type, active })
  }
}
