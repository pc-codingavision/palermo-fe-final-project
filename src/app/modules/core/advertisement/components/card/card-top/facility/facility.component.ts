import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
})
export class FacilityComponent implements OnInit {
  @Input() facility: { [key: string]: string }

  facilityIcon: { [key: string]: string } = {
    tv: 'tv',
    wifi: 'wifi',
    breakfastIncluded: 'free_breakfast',
    parking: 'local_parking',
    kitchen: 'kitchen',
    shower: 'shower',
    bath: 'bathtub',
  }

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
