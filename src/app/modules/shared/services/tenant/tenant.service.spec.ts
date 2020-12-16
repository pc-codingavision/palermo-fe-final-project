import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'

import { TenantService } from './tenant.service'

describe('TenantService', () => {
  let service: TenantService
  let buildTenants: Tenant[]
  const tenantUpdate: Tenant = {
    id: 1,
    name: { firstName: 'Test', surname: 'Fantozzi' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    mail: 'rag-fantozzi@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'ragUgo',
    password: '4321',
    status: true,
    dateOfBirth: new Date(1960, 1, 1),
    role: Role.Tenant,
    address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  }
  const defaultTenant = {
    id: null,
    name: { firstName: '', middleName: '', surname: '' },
    phone: [],
    mail: '',
    picture: '',
    username: '',
    password: '',
    status: false,
    dateOfBirth: null,
    role: Role.Tenant,
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      postCode: '',
    },
    fullName: '',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TenantService)
    buildTenants = TENANTS_MOCK_DATA.map((tenant) => Tenant.Build(tenant)) as Tenant[]
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#getAll should return all tenants', (done: DoneFn) => {
    service.getAll().subscribe((tenants) => expect(tenants).toEqual(buildTenants))
    done()
  })

  it('#getById should return tenant by id', (done: DoneFn) => {
    service.getById(1).subscribe((tenant) => expect(tenant).toEqual(buildTenants[0]))
    done()
  })

  it('#getdById should return null for not existing id or null', (done: DoneFn) => {
    service.getById(10).subscribe((tenant) => expect(tenant).toBeNull())
    service.getById(null).subscribe((tenant) => expect(tenant).toBeNull())
    done()
  })

  it('#getByFullName should return all tenants who have that Full Name', (done: DoneFn) => {
    service
      .getByFullName('Ugo Fantozzi')
      .subscribe((tenants) => expect(tenants).toEqual([buildTenants[0]]))
    done()
  })

  it("#getByFullName should return an empty array if it doesn't find anything with that full name or if we pass null", (done: DoneFn) => {
    service.getByFullName('Test').subscribe((tenants) => expect(tenants).toEqual([]))
    service.getByFullName(null).subscribe((tenants) => expect(tenants).toEqual([]))
    done()
  })

  it('#getByStatus should return all tenants who have that status', (done: DoneFn) => {
    service
      .getByStatus(true)
      .subscribe((tenants) =>
        expect(tenants).toEqual(service.tenants.filter((x) => x.status === true))
      )
    done()
  })

  it("#getByStatus should return an empty array if it doesn't find anything with that status or if we pass null", (done: DoneFn) => {
    service
      .getByStatus(false)
      .subscribe((tenants) =>
        expect(tenants).toEqual(service.tenants.filter((x) => x.status === false))
      )
    service.getByStatus(null).subscribe((tenants) => expect(tenants).toEqual([]))
    done()
  })

  it('#add should add a tenant', () => {
    expect(service.tenants.length).toBe(5)
    service.add(defaultTenant)
    expect(service.tenants.length).toBe(6)
    expect(service.tenants).toContain(defaultTenant)
  })

  it("#add shouldn't add if we don't pass tenant ", () => {
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length)
    service.add(null)
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length)
  })

  it('#update should update a tenant and return it', (done: DoneFn) => {
    service
      .update(tenantUpdate)
      .subscribe(() => expect(service.tenants).not.toEqual(TENANTS_MOCK_DATA))
    done()
  })

  it("#update shouldn't update if we don't pass tenant", (done: DoneFn) => {
    service
      .update(null)
      .subscribe(() => expect(service.tenants).toEqual(TENANTS_MOCK_DATA))
    done()
  })

  it('#delete should delete tenant', () => {
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length)
    service.delete(1)
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length - 1)
    expect(service.tenants).not.toContain(buildTenants[0])
  })

  it("#delete shouldn't delete a tenant for not existing id", () => {
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length)
    service.delete(6)
    expect(service.tenants.length).toBe(TENANTS_MOCK_DATA.length)
  })
})
