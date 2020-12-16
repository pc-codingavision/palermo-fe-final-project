import { Overlay } from '@angular/cdk/overlay'
import { HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { commonTestingModules } from '@shared/common.testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { TENANTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Tenant } from '@shared/models/tenant'

describe('InMemoryTenantService', () => {
  let service: InMemoryTenantService
  let httpTestingController: HttpTestingController
  const buildTenants = TENANTS_MOCK_DATA.map((tenant) => Tenant.Build(tenant))

  const newTenant: Tenant = {
    id: 3,
    name: { firstName: 'Vito', surname: 'Telli' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    mail: 'test@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'VitoTelli',
    password: '1234',
    status: false,
    dateOfBirth: new Date(1960, 3, 9),
    role: Role.Tenant,
    address: {
      line1: 'Via Etnea',
      city: 'Catania',
      state: 'Italia',
      postCode: '95030',
    },
    fullName: '',
  }
  const updatedTenant = {
    id: 1,
    name: { firstName: 'Silvio', surname: 'Roberti' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    mail: 'rag-Roberti@test.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'Silvio',
    password: '4321',
    status: true,
    dateOfBirth: new Date(1960, 1, 1),
    role: Role.Tenant,
    address: { line1: 'Via Pina', city: 'Roma', state: 'Italia', postCode: '90000' },
    fullName: '',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      providers: [InMemoryTenantService, MatSnackBar, Overlay],
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(InMemoryTenantService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('GetAll', () => {
    it('should return all tenants', () => {
      let data
      service.getAll().subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants')
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants)
      expect(data).toEqual(buildTenants)
    })
  })

  describe('GetById', () => {
    it('should return tenant by passed id', () => {
      let data
      service.getById(1).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants/1')
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants[0])
      expect(data).toEqual(buildTenants[0])
    })

    it('should throw errorResponse for not existing id ', () => {
      const errorResponse = new ErrorEvent('error', {
        message: `'Tenants' with id=6 not found`,
      })
      service.getById(6).subscribe(
        (response) => fail(errorResponse),
        (error: HttpErrorResponse) => {
          expect(error.error.message).toEqual(errorResponse)
        }
      )

      const req = httpTestingController.expectOne('api/tenants/6')
      expect(req.request.method).toEqual('GET')
      req.error(errorResponse)
    })
  })

  describe('GetByName', () => {
    it('should return all tenants who have passed Name', () => {
      let data
      service.getByName('ugo').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?name=ugo')
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants[0])
      expect(data).toEqual(buildTenants[0])
    })

    it("should return null if it doesn't find anything with passed name", () => {
      let data
      service.getByName('mario').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?name=mario')
      expect(req.request.method).toEqual('GET')
      req.flush(null)
      expect(data).toBeNull()
    })

    it('should return null if we pass null', () => {
      let data
      service.getByName(null).subscribe((response) => {
        data = response
      })

      httpTestingController.expectNone('api/tenants?name=null')
      expect(data).toBeNull()
    })
  })

  describe('GetBySurname', () => {
    it('should return all tenants who have that Surname', () => {
      let data
      service.getBySurname('fantozzi').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?surname=fantozzi')
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants[0])
      expect(data).toEqual(buildTenants[0])
    })

    it("should return an empty array if it doesn't find anything with that surname", () => {
      let data
      service.getBySurname('oliva').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?surname=oliva')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data.length).toBe(0)
    })

    it('should return null if we pass null', () => {
      let data
      service.getBySurname(null).subscribe((response) => {
        data = response
      })

      httpTestingController.expectNone('api/tenants?surname=null')

      expect(data).toBeNull()
    })
  })

  describe('GetByMail', () => {
    it('should return all tenants who have passed email rag-fantozzi@test.com', () => {
      let data
      service.getByMail('rag-fantozzi@test.com').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne(
        'api/tenants?mail=rag-fantozzi%40test.com'
      )
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants[0])
      expect(data).toEqual(buildTenants[0])
    })

    it('should return null if we pass null ', () => {
      let data
      service.getByMail(null).subscribe((response) => {
        data = response
      })
      httpTestingController.expectNone('api/tenants?mail=rAg-fantOzzi%40test.com')
      expect(data).toBeNull()
    })
  })

  describe('GetByStatus', () => {
    it('should return all tenants who have status of true', () => {
      let data
      service.getByStatus(true).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?status=true')
      expect(req.request.method).toEqual('GET')
      req.flush(buildTenants)
      expect(data).toEqual(buildTenants)
    })

    it('should return null if we pass null', () => {
      let data
      service.getByStatus(null).subscribe((response) => {
        data = response
      })

      httpTestingController.expectNone('api/tenants?status=null')
      expect(data).toBeNull()
    })
  })

  describe('Add', () => {
    it('should add a new tenant', () => {
      service.add(newTenant).subscribe((response) => {
        expect(response).toEqual(newTenant)
      })

      const req = httpTestingController.expectOne('api/tenants')
      expect(req.request.method).toBe('POST')
      req.flush(newTenant)
    })
  })

  describe('Update', () => {
    it('should update an existing tenant with the same id', () => {
      service.update(updatedTenant).subscribe((response) => {
        expect(response.name.firstName).toBe('Silvio')
        expect(response.id).toBe(1)
      })
      const req = httpTestingController.expectOne('api/tenants')
      expect(req.request.method).toBe('PUT')
      req.flush(updatedTenant)
    })
  })

  describe('Delete', () => {
    it('should delete tenant with passed id', () => {
      let data
      service.delete(1).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants/1')
      expect(req.request.method).toBe('DELETE')
      req.flush(null)
      expect(data).toBeNull()
    })
  })
})
