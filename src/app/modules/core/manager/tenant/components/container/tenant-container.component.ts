import { Component, OnDestroy, OnInit } from '@angular/core'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit, OnDestroy {
  tenants$: Observable<Tenant[]>
  subscriptions: Subscription[] = []
  constructor(private inMemoryTenantService: InMemoryTenantService) {}

  ngOnInit(): void {
    this.getAll()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

  getAll(): void {
    this.tenants$ = this.inMemoryTenantService
      .getAll()
      .pipe(map((tenants) => tenants.map((tenant) => Tenant.Build(tenant))))
  }

  updateTenant(event: number | Tenant): void {
    if (typeof event === 'number') {
      this.subscriptions.push(this.inMemoryTenantService.delete(event).subscribe())
      this.getAll()
    } else {
      this.subscriptions.push(this.inMemoryTenantService.update(event).subscribe())
    }
  }
}
