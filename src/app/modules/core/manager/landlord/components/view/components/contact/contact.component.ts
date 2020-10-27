import { Component, Input, OnInit } from '@angular/core'

import { Landlord } from './../../../../../../../../shared/models/landlord'

@Component({
  selector: 'cav-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() landlord: Landlord

  constructor() {}

  ngOnInit(): void {}
}
