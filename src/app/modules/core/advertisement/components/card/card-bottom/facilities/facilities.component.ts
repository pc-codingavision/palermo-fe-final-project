import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IFacilities } from '@shared/models/property'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  @Input() facilities: { [key: string]: string }
  constructor() {}

  ngOnInit(): void {}

  facilityName: { [key: string]: string } = {
    tv: 'TV',
    wifi: 'Free Wi-Fi',
    breakfastIncluded: 'Breakfast included',
    parking: 'Free parking',
    kitchen: 'Kitchen',
    shower: 'Shower',
    bath: 'Bathtub',
  }
}
