import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss'],
})
export class FacilityComponent implements OnInit {
  @Input() facility: { [key: string]: string }

  facilityData: { [key: string]: { icon: string; description: string } } = {
    tv: {
      icon: 'tv',
      description: 'TV',
    },
    wifi: {
      icon: 'wifi',
      description: 'Free Wi-Fi',
    },
    breakfastIncluded: {
      icon: 'free_breakfast',
      description: 'Breakfast included',
    },
    parking: {
      icon: 'local_parking',
      description: 'Free parking',
    },
    kitchen: {
      icon: 'kitchen',
      description: 'Kitchen',
    },
    shower: {
      icon: 'shower',
      description: 'Shower',
    },
    bath: {
      icon: 'bathtub',
      description: 'Bathtub',
    },
  }

  ngOnInit(): void {}
}
