import { Component, Input, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Tenant } from '@shared/models/tenant'

@Component({
  selector: 'cav-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss'],
})
export class TenantListComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'fullName', 'username', 'mail']
  @Input() dataSource: MatTableDataSource<Tenant[]>
  constructor() {}

  ngOnInit(): void {}
}
