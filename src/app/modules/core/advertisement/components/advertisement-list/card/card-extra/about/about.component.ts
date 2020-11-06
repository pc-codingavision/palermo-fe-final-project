import { Component, Input, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../../../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
