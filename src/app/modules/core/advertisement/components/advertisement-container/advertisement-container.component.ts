import { Component, OnInit } from '@angular/core'

import { MOCKADVERTISEMENT_MOCK_DATA } from '../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisement = MOCKADVERTISEMENT_MOCK_DATA
  constructor() {}

  ngOnInit(): void {}
}
