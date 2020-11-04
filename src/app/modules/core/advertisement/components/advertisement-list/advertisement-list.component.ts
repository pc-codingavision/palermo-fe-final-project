import { Component, Input, OnInit } from '@angular/core'

import { IAdvertisement } from './../../../../../shared/models/advertisement'

@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input() advertisements: IAdvertisement[]
  constructor() {}

  ngOnInit(): void {}
}
