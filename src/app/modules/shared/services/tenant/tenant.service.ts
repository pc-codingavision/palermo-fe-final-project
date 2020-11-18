import { Injectable } from '@angular/core'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TenantService {
  tenants: Tenant[] = TENANTS_MOCK_DATA.map((tenant) => ({ ...tenant })) as Tenant[]

  constructor() {}

  private getArrayIndexById(id: number): number | null {
    const index = this.tenants.findIndex((tenant) => tenant.id === id)
    return index === -1 ? null : index
  }

  getAll(): Observable<Tenant[]> {
    return of(this.tenants.map((tenant) => Tenant.Build(tenant)))
  }

  getById(id: number): Observable<Tenant> {
    if (id !== null) {
      const tenantById = this.tenants.find((tenant) => tenant.id === id)
      if (tenantById !== undefined) {
        return of(Tenant.Build(tenantById))
      }
    }
    return of(null)
  }

  getByFullName(fullName: string): Observable<Tenant[]> {
    const buildTenants = this.tenants.map((tenant) => Tenant.Build(tenant))
    return of(buildTenants.filter((tenant) => fullName === tenant.fullName))
  }

  getByStatus(status: boolean): Observable<Tenant[]> {
    return of(this.tenants.filter((tenant) => tenant.status === status))
  }

  add(tenant: Tenant): void {
    if (tenant !== null) {
      this.tenants.push(tenant)
    }
  }

  update(tenant: Tenant): Observable<Tenant | null> {
    if (tenant !== null) {
      const index = this.getArrayIndexById(tenant.id)
      if (typeof index === 'number') {
        return of((this.tenants[index] = tenant))
      }
    }
    return of(null)
  }

  delete(id: number): void {
    if (this.getArrayIndexById(id) !== null) {
      this.tenants.splice(this.getArrayIndexById(id), 1)
    }
  }
}
