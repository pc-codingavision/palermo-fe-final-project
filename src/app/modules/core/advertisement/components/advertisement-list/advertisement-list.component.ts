import { Component, Input, OnInit } from '@angular/core'

import { Advertisement } from './../../../../../shared/models/advertisement'

@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input() advertisement: Advertisement
  constructor() {}

  ngOnInit(): void {}
}
