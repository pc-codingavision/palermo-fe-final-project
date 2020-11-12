import { Component, OnInit } from '@angular/core'
import { MOCKADVERTISEMENTS_MOCK_DATA } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisements = MOCKADVERTISEMENTS_MOCK_DATA
  constructor() {}

  ngOnInit(): void {}
}
