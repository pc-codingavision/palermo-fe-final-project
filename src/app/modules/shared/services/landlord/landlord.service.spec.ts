import { Overlay } from '@angular/cdk/overlay'
import { HttpResponse } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { PhoneType, Role } from '@shared/enum/enums'
import { Landlord } from '@shared/models/landlord'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'

import { LandlordService } from './landlord.service'

describe('LandlordService', () => {
  let httpTestingController: HttpTestingController
  let service: LandlordService
  const buildLandlords: Landlord[] = LANDLORDS_MOCK_DATA.map((landlord) =>
    Landlord.Build(landlord)
  ) as Landlord[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LandlordService, MatSnackBar, Overlay],
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(LandlordService)
  })

  describe('#getAll', () => {
    it('should return all landlords', () => {
      service.getAll().subscribe((landlords) => expect(landlords).toEqual(buildLandlords))

      const req = httpTestingController.expectOne(service.landlordsUrl)
      expect(req.request.method).toEqual('GET')

      req.flush(buildLandlords)
    })

    it("should return error 404 if get call don't work", () => {
      const msg = 'deliberate 404 error'
      service.getAll().subscribe((landlords) => expect(landlords.length).toBe(0))

      const req = httpTestingController.expectOne(service.landlordsUrl)
      req.flush(msg, { status: 404, statusText: 'Not Found' })
    })
  })

  describe('#getById', () => {
    it('should return landlord with specified id', () => {
      service
        .getById(1)
        .subscribe((landlord) => expect(landlord).toEqual(buildLandlords[0]))

      const req = httpTestingController.expectOne(`${service.landlordsUrl}/1`)
      expect(req.request.method).toEqual('GET')

      req.flush(buildLandlords[0])
    })
  })

  describe('#delete', () => {
    it('should remove landlord with specified id', () => {
      service.delete(1).subscribe()
      const delReq = httpTestingController.expectOne(`${service.landlordsUrl}/1`)
      expect(delReq.request.method).toEqual('DELETE')
    })
  })

  describe('#add', () => {
    const newLandlord: Landlord = {
      id: 4,
      name: { firstName: 'Mario', surname: 'Rossi' },
      phone: [
        { id: 1, type: PhoneType.Mobile, digits: '3454545' },
        { id: 2, type: PhoneType.Home, digits: '09252525' },
      ],
      mail: 'piero-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord1',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1980, 10, 10),
      role: Role.Landlord,
      address: {
        line1: 'Via delle Magnolie',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      fullName: 'Mario Rossi',
    }
    it('should add a landlord and return it', () => {
      service
        .add(newLandlord)
        .subscribe((landlord) => expect(landlord).toEqual(newLandlord))
      const req = httpTestingController.expectOne(service.landlordsUrl)
      expect(req.request.method).toEqual('POST')
      req.flush(newLandlord)
    })
  })
  describe('#update', () => {
    const landlordUpdated: Landlord = {
      id: 1,
      name: { firstName: 'pino', surname: 'Cascio' },
      phone: [
        { id: 1, type: PhoneType.Mobile, digits: '3454545' },
        { id: 2, type: PhoneType.Home, digits: '09252525' },
      ],
      mail: 'piero-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord1',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1980, 10, 10),
      role: Role.Landlord,
      address: {
        line1: 'Via delle Magnolie',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      fullName: 'dfgdfg',
    }

    it('should modify landlord and return it updated', () => {
      service.update(landlordUpdated).subscribe((a) => expect(a).toEqual(landlordUpdated))
      const req = httpTestingController.expectOne(`${service.landlordsUrl}`)
      expect(req.request.method).toEqual('PUT')
      expect(req.request.body).toEqual(landlordUpdated)
      const resp = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: landlordUpdated,
      })
      req.event(resp)
    })
  })
  describe('#toggleStatus', () => {
    const landlordUpdated: Landlord = {
      id: 1,
      name: { firstName: 'pino', surname: 'Cascio' },
      phone: [
        { id: 1, type: PhoneType.Mobile, digits: '3454545' },
        { id: 2, type: PhoneType.Home, digits: '09252525' },
      ],
      mail: 'piero-landlord@test.com',
      picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
      username: 'landlord1',
      password: 'password',
      status: true,
      dateOfBirth: new Date(1980, 10, 10),
      role: Role.Landlord,
      address: {
        line1: 'Via delle Magnolie',
        city: 'Palermo',
        state: 'italia',
        postCode: '90100',
      },
      fullName: 'dfgdfg',
    }
    it('should change landlord status to false', () => {
      service
        .toggleStatus(landlordUpdated)
        .subscribe((status: boolean) => expect(status).toBeFalse())
      const req = httpTestingController.expectOne(`${service.landlordsUrl}`)
      // expect(req.request.method).toEqual('PATCH')
      // expect(req.request.body).toEqual(false)
      const resp = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: 'false',
      })
      req.event(resp)
    })
  })

  it('#getLenght should return the length of all landlords ', (done: DoneFn) => {
    service
      .getLength()
      .subscribe((length) => expect(length).toEqual(service.landlords.length))
    done()
  })
})
