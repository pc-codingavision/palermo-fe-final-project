import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-facility-filter',
  templateUrl: './facility-filter.component.html',
  styleUrls: ['./facility-filter.component.scss'],
})
export class FacilityFilterComponent implements OnInit {
  expanded = false

  constructor() {}

  ngOnInit(): void {}

  expand(): boolean {
    return (this.expanded = !this.expanded)
  }
}
