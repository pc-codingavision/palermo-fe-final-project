import { Component, Input, OnInit } from '@angular/core'

import { IAdvertisement } from './../../../../../../../../shared/models/advertisement'
import { IProperty } from './../../../../../../../../shared/models/property'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() advertisements: IAdvertisement
  constructor() {}

  ngOnInit(): void {}
}
