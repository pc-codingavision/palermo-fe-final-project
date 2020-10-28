import { Component, Input, OnInit } from '@angular/core'

import { IPhone } from './../../../../../../../../shared/models/users'

@Component({
  selector: 'cav-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  @Input() landlord: { phones: IPhone[]; mail: string }

  constructor() {}

  ngOnInit(): void {}
}
