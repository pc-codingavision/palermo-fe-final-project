import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input() advertisements: IMockAdvertisement[]
  constructor() {}
  ngOnInit(): void {}
}
