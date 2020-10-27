import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() landStatus: boolean
  status: string

  constructor() {}

  ngOnInit(): void {
    this.landStatus ? (this.status = 'Active') : (this.status = 'Disactive')
  }
}
