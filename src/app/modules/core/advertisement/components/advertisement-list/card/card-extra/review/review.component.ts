import { Component, Input, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../../../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
