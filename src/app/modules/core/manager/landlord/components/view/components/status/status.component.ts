import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() landlord: { fullName: string; picture: string; status: boolean }

  status: string

  constructor() {}

  ngOnInit(): void {}
}
