import { Component, Input, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
