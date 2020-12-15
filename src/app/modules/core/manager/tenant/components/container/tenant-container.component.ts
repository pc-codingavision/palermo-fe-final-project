import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { map } from 'rxjs/operators'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  tenants: Tenant[]
  dataSource: MatTableDataSource<Tenant>
  constructor(private inMemoryTenantService: InMemoryTenantService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.inMemoryTenantService
      .getAll()
      .pipe(map((tenants) => tenants.map((tenant) => Tenant.Build(tenant))))
      .subscribe((tenants) => {
        this.dataSource = new MatTableDataSource<Tenant>(tenants)
        this.tenants = tenants
      })
  }

  applyFilter(event: string): void {
    const filterValue = event
    this.dataSource.filter = filterValue?.trim().toLowerCase()
  }
}
