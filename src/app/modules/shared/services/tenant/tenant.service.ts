import { Injectable } from '@angular/core'
import { GenericUserService } from '@modules/shared/services/generic-user-service'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'

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
}
