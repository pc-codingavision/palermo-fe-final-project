import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { IFacilities } from '@shared/models/property'

@Component({
  selector: 'cav-facility-filter',
  templateUrl: './facility-filter.component.html',
  styleUrls: ['./facility-filter.component.scss'],
})
export class FacilityFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<IFacilities>()
  expanded = false
  filterObj: IFacilities = {
    tv: false,
    wifi: false,
    breakfastIncluded: false,
    parking: false,
    kitchen: false,
    shower: false,
    bath: false,
  }

  constructor() {}

  ngOnInit(): void {}

  expand(): boolean {
    return (this.expanded = !this.expanded)
  }

  emitFacilityFilter(facility: string, status: boolean): void {
    this.filterObj[facility] = status
    this.filter.emit(this.filterObj)
  }
}
