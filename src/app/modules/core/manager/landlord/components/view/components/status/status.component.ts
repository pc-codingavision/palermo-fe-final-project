import { Component, Input, OnInit } from '@angular/core'
import { Landlord } from '@shared/models/landlord'

@Component({
  selector: 'cav-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() landlord: Landlord

  status: string

  constructor() {}

  ngOnInit(): void {}
}
