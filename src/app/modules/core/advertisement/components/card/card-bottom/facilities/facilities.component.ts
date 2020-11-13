import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  constructor() {}
  @Input() facilities: { [key: string]: string }

  facilityName: { [key: string]: string } = {
    tv: 'TV',
    wifi: 'Free Wi-Fi',
    breakfastIncluded: 'Breakfast included',
    parking: 'Free parking',
    kitchen: 'Kitchen',
    shower: 'Shower',
    bath: 'Bathtub',
  }

  ngOnInit(): void {}
}
