import { Component, Input, OnInit } from '@angular/core'

import { Landlord } from './../../../../../../../../shared/models/landlord'

@Component({
  selector: 'cav-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() landlord: Landlord

  constructor() { }

  ngOnInit(): void { }
}
