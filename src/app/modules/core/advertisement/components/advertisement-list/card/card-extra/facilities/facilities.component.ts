import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../../../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
