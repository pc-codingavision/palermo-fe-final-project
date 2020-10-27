import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
})
export class PriceFilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formatLabel(value: number): string {
    return value + '€'
  }
}
