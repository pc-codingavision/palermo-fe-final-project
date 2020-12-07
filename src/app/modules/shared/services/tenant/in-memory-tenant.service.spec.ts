import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { PhoneType, Role } from '@shared/enum/enums'
import { ResponseOptions } from 'angular-in-memory-web-api'

import { TENANTS_MOCK_DATA } from './../../../../shared/models/mock-data/data'
import { Tenant } from './../../../../shared/models/tenant'
import { InMemoryTenantService } from './in-memory-tenant.service'

describe('InMemoryTenantService', () => {
  let service: InMemoryTenantService
  let httpTestingController: HttpTestingController

  const mockTenants = TENANTS_MOCK_DATA
  const newTenant: Tenant = {
    id: 3,
    name: { firstName: 'Matteo', surname: 'Oliva' },
    phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
    mail: 'olivamatteus@gmail.com',
    picture: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
    username: 'matteus',
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
      imports: [HttpClientTestingModule],
      providers: [InMemoryTenantService],
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
      req.flush(mockTenants)
      expect(data).toEqual(mockTenants)
    })

    it('should return all tenants...', () => {
      const response = [
        {
          id: 1,
          name: { firstName: 'Ugo', surname: 'Fantozzi' },
          phone: [{ id: 1, type: PhoneType.Mobile, digits: '321456789' }],
          mail: 'rag-fantozzi@test.com',
          picture:
            'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
          username: 'ragUgo',
          password: 'password',
          status: true,
          dateOfBirth: new Date(1960, 1, 1),
          role: Role.Tenant,
          address: {
            line1: 'Via Pina',
            city: 'Roma',
            state: 'Italia',
            postCode: '90000',
          },
          fullName: '',
        },
        {
          id: 2,
          name: { firstName: 'Gigi', surname: 'Filini' },
          phone: [
            { id: 1, type: PhoneType.Home, digits: '0900256248' },
            { id: 2, type: PhoneType.Mobile, digits: '355847229' },
          ],
          mail: 'geom-filini@test.com',
          picture:
            'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
          username: 'geomFilini',
          password: 'password',
          status: true,
          dateOfBirth: new Date(1960, 2, 2),
          role: Role.Tenant,
          address: {
            line1: 'Via Abruzzo',
            city: 'Roma',
            state: 'Italia',
            postCode: '90000',
          },
          fullName: '',
        },
      ]

      service.getAll().subscribe((result) => {
        expect(result.length).toEqual(2)
        expect(result[0].name.firstName).toEqual('Ugo')
        expect(result[0].id).toEqual(1)
        expect(result).toEqual(response)
      })

      httpTestingController.expectOne('api/tenants').flush(response)
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
      req.flush(mockTenants[0])
      expect(data).toEqual(mockTenants[0])
    })

    it('should return empty array and throw error for not existing id ', () => {
      let data
      const errorResponse: ResponseOptions = {
        body: { error: `'Tenants' with id=6 not found` },
        status: 404,
      }

      service.getById(6).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants/6')
      expect(req.request.method).toEqual('GET')
      req.flush(errorResponse)
      expect(data).toEqual(errorResponse)
    })

    it('should throw error for not existing id ', () => {
      service.getById(6).subscribe(
        (response) => {
          throw new Error('Not Found')
        },
        (error) => {
          expect(error.status).toEqual(404)
          expect(error.statusText).toEqual(`Tenants' with id=6 not found`)
        }
      )

      httpTestingController.expectOne('api/tenants/6').error(new ErrorEvent(''), {
        status: 404,
        statusText: `Tenants' with id=6 not found`,
      })
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
      req.flush(mockTenants[0])
      expect(data).toEqual(mockTenants[0])
    })

    it("should return an empty array if it doesn't find anything with passed name", () => {
      let data
      service.getByName('mario').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?name=mario')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })

    it('should return an empty array if we pass null', () => {
      let data
      service.getByName(null).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?name=null')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })
  })

  describe('GetBySurname', () => {
    it('#getBySurname should return all tenants who have that Surname', () => {
      let data
      service.getBySurname('fantozzi').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?surname=fantozzi')
      expect(req.request.method).toEqual('GET')
      req.flush(mockTenants[0])
      expect(data).toEqual(mockTenants[0])
    })

    it("#getBySurname should return an empty array if it doesn't find anything with that surname", () => {
      let data
      service.getBySurname('oliva').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?surname=oliva')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })

    it('#getBySurname should return an empty array if we pass null', () => {
      let data
      service.getBySurname(null).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?surname=null')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })
  })

  describe('GetByMail', () => {
    it('should return all tenants who have passed email', () => {
      let data
      service.getByMail('rAg-fantOzzi@test.com').subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne(
        'api/tenants?mail=rAg-fantOzzi%40test.com'
      )
      expect(req.request.method).toEqual('GET')
      req.flush(mockTenants[0])
      expect(data).toEqual(mockTenants[0])
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
      req.flush(mockTenants)
      expect(data).toEqual(mockTenants)
    })

    it('should return all tenants who have that status of false', () => {
      let data
      service.getByStatus(false).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?status=false')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })

    it('should return empty array if we pass null', () => {
      let data
      service.getByStatus(null).subscribe((response) => {
        data = response
      })

      const req = httpTestingController.expectOne('api/tenants?status=null')
      expect(req.request.method).toEqual('GET')
      req.flush([])
      expect(data).toEqual([])
    })
  })

  describe('Add', () => {
    it('should add a new tenant', () => {
      service.add(newTenant).subscribe((response) => {
        expect(response).toEqual(newTenant)
        expect(response.name.firstName).toBe('Matteo')
      })

      const req = httpTestingController.expectOne('api/tenants')
      expect(req.request.method).toEqual('POST')
      req.flush(newTenant)
    })
  })

  describe('Update', () => {
    it('#update should update an existing tenant with the same id', () => {
      service.update(updatedTenant).subscribe((response) => {
        expect(response.name.firstName).toBe('Silvio')
        expect(response.id).toBe(1)
      })
      const req = httpTestingController.expectOne('api/tenants')
      expect(req.request.method).toEqual('PUT')
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
      expect(req.request.method).toEqual('DELETE')
      req.flush(null)
      expect(data).toBeNull()
    })
  })
})
