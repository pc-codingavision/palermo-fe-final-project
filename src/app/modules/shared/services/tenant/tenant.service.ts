import { Injectable } from '@angular/core'
import { GenericUserService } from '@modules/shared/services/generic-user-service'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TenantService extends GenericUserService<Tenant> {
  tenants = TENANTS_MOCK_DATA.map((tenant) => ({ ...tenant })) as Tenant[]

  getMockedData(): Tenant[] {
    return this.tenants
  }

  builtMockData(user: Tenant): Tenant {
    return Tenant.Build(user)
  }

  getByStatus(status: boolean): Observable<Tenant[]> {
    return of(this.getMockedData().filter((tenant) => tenant.status === status))
  }

  getByFullName(fullName: string): Observable<Tenant[]> {
    const buildUsers = this.tenants.map((tenant) => this.builtMockData(tenant))
    return of(buildUsers.filter((tenant) => fullName === tenant.fullName))
  }
}
