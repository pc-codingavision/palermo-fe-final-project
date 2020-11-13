import { Component, Input, OnInit } from '@angular/core'
import { IProperty } from '@shared/models/property'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  constructor() {}

  @Input() property: IProperty

  ngOnInit(): void {}
}
