import { formatCurrency } from '@angular/common'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  @Input() maxPrice: number
  @Input() minPrice: number
  @Output() filter = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  formatLabel(value: number): string {
    return formatCurrency(value, 'en', '€', '', '.0')
  }

  emitFilter(value: number): void {
    this.filter.emit(value)
  }
}
