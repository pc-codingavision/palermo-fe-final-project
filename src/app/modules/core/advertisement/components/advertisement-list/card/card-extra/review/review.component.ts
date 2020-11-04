import { Component, Input, OnInit } from '@angular/core'

import { IProperty } from './../../../../../../../../shared/models/property'

@Component({
  selector: 'cav-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() property: IProperty

  constructor() {}

  ngOnInit(): void {}
}
