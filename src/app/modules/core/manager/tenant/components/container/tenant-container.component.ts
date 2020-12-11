import { Component, OnInit } from '@angular/core'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'cav-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss'],
})
export class TenantContainerComponent implements OnInit {
  tenants$: Observable<Tenant[]>
  constructor(private inMemoryTenantService: InMemoryTenantService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.tenants$ = this.inMemoryTenantService
      .getAll()
      .pipe(map((tenants) => tenants.map((tenant) => Tenant.Build(tenant))))
  }
}
