import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'

import { MockAdvertisement } from './../../mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  constructor() {}
  @Input() advertisement: MockAdvertisement
  ngOnInit(): void {}
}
