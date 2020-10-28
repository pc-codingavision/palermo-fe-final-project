import { Component, Input, OnInit } from '@angular/core'
import { IName } from 'src/app/shared/models/users'

@Component({
  selector: 'cav-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() landlord: {
    name: IName
    username: string
    dateOfBirth: Date
  }

  constructor() {}

  ngOnInit(): void {}
}
