import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { SpinnerService } from '@shared/services/spinner.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit, OnDestroy {
  filteredTenants: Tenant[]
  dataSource: MatTableDataSource<Tenant>
  filterCriteria: { searchTerm: string; status: boolean }
  subscriptions: Subscription[] = []

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
    this.getAll()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  getAll(): void {
    this.subscriptions.push(
      this.inMemoryTenantService.getAll().subscribe((tenants) => {
        this.dataSource = new MatTableDataSource<Tenant>(tenants)

        this.dataSource.filterPredicate = this.customerFilter
        this.dataSource.filter = JSON.stringify(this.filterCriteria)
        this.spinnerService.hideSpinner()
      })
    )
  }

  updateTenant(event: number | Tenant): void {
    if (typeof event === 'number') {
      this.subscriptions.push(this.inMemoryTenantService.delete(event).subscribe())
      this.getAll()
    } else {
      this.subscriptions.push(this.inMemoryTenantService.update(event).subscribe())
    }
  }

  applyFilter(event: string): void {
    this.dataSource.filter = JSON.stringify(
      Object.assign(this.filterCriteria, {
        searchTerm: event.trim().toLowerCase(),
      })
    )
  }

  selectStatus(status: string): void {
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
      return tenant.status === filterCriteria.status
    }
  }
}
