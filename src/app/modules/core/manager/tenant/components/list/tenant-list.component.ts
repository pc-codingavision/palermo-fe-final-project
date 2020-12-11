import { Component, Input, OnInit } from '@angular/core'
import { Tenant } from '@shared/models/tenant'

@Component({
  selector: 'cav-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss'],
})
export class TenantListComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'fullName', 'username', 'mail']
  @Input() tenants: Tenant[]
  constructor() {}

  ngOnInit(): void {}
}
