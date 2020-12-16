import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { SpinnerService } from '@shared/services/spinner.service'
import { map } from 'rxjs/operators'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  tenants: Tenant[]
  filteredTenants: Tenant[]
  dataSource: MatTableDataSource<Tenant>
  filterCriteria: { searchTerm: string; status: boolean }

  constructor(
    private inMemoryTenantService: InMemoryTenantService,
    private spinnerService: SpinnerService
  ) {
    this.filterCriteria = {
      searchTerm: '',
      status: true,
    }
  }

  ngOnInit(): void {
    this.spinnerService.showSpinner()
    this.inMemoryTenantService
      .getAll()
      .pipe(map((tenants) => tenants.map((tenant) => Tenant.Build(tenant))))
      .subscribe((tenants) => {
        this.dataSource = new MatTableDataSource<Tenant>(tenants)

        this.dataSource.filterPredicate = this.customerFilter
        this.dataSource.filter = JSON.stringify(this.filterCriteria)
        this.spinnerService.hideSpinner()
      })
  }

  applyFilter(event: string): void {
    this.dataSource.filter = JSON.stringify(
      Object.assign(this.filterCriteria, {
        searchTerm: event.trim().toLowerCase(),
      })
    )
  }

  selectStatus(status: string): void {
    console.log(`Status: ${status}`)
    this.dataSource.filter = JSON.stringify(
      Object.assign(this.filterCriteria, {
        status: status === 'true',
      })
    )
  }

  private customerFilter: (tenant: Tenant, criteria: string) => boolean = (
    tenant: Tenant,
    criteria: string
  ) => {
    const filterCriteria: { searchTerm: string; status: boolean } = JSON.parse(criteria)

    if (filterCriteria.searchTerm !== '') {
      debugger
      return (
        (tenant.fullName
          .toLowerCase()
          .includes(filterCriteria.searchTerm.toLowerCase()) ||
          tenant.username
            .toLowerCase()
            .includes(filterCriteria.searchTerm.toLowerCase()) ||
          tenant.mail.toLowerCase().includes(filterCriteria.searchTerm.toLowerCase())) &&
        tenant.status === filterCriteria.status
      )
    } else {
      debugger
      return tenant.status === filterCriteria.status
    }
  }
}
