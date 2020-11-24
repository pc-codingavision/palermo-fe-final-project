import { Component, Input, OnInit } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  @Input() advertisements: Set<MockAdvertisement>
  constructor() {}
  ngOnInit(): void {}
}
