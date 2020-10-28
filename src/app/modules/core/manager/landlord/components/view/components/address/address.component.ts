import { Component, Input, OnInit } from '@angular/core'

import { IAddress } from './../../../../../../../../shared/models/users'

@Component({
  selector: 'cav-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() address: IAddress

  constructor() {}

  ngOnInit(): void {}
}
