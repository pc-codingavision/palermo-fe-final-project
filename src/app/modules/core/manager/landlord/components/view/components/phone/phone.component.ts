import { Component, Input, OnInit } from '@angular/core'

import { Landlord } from './../../../../../../../../shared/models/landlord'

@Component({
  selector: 'cav-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  @Input() landlord: Landlord

  constructor() {}

  ngOnInit(): void {}
}
