import { Overlay } from '@angular/cdk/overlay'
import { HttpResponse } from '@angular/common/http'
import { HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'
import { commonTestingModules } from '@shared/common.testing'
import { RESERVATIONS_MOCK_DATA } from '@shared/models/mock-data/data'
import { IReservation } from '@shared/models/reservation'

describe('ReservationService', () => {
  let service: ReservationService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [commonTestingModules],
      providers: [MatSnackBar, Overlay],
    })
    service = TestBed.inject(ReservationService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('#getAll', () => {
    it('should return all the reservations', () => {
      service.getAll()
      service.reservations$.subscribe((result) =>
        expect(result).toEqual(RESERVATIONS_MOCK_DATA)
      )

      const request = httpTestingController.expectOne('api/reservations')
      expect(request.request.method).toEqual('GET')
      request.flush(RESERVATIONS_MOCK_DATA)
    })

    it('should return an empty array if the API response return an empty body', () => {
      service.getAll()
      service.reservations$.subscribe((result) => expect(result.length).toBe(0))

      const request = httpTestingController.expectOne('api/reservations')
      expect(request.request.method).toEqual('GET')
      request.flush([])
    })
  })

  describe('#getById', () => {
    it('should return specific reservation based on the passed id', () => {
      service
        .getById(1)
        .subscribe((result) => expect(result).toEqual(RESERVATIONS_MOCK_DATA[0]))

      const request = httpTestingController.expectOne('api/reservations/1')
      expect(request.request.method).toEqual('GET')
      request.flush(RESERVATIONS_MOCK_DATA[0])
    })
  })

  describe('#update', () => {
    const mockUpdateReservation = {
      id: 1,
      tenantId: 1,
      propertyId: 1,
      guestNumber: 3,
      checkIn: '02/12/2020',
      checkOut: '05/12/2020',
      specialRequest: '',
    }

    it('should update the reservation with matching id', () => {
      service
        .update(mockUpdateReservation)
        .subscribe((result) => expect(result).toEqual(mockUpdateReservation))

      const request = httpTestingController.expectOne('api/reservations')
      expect(request.request.method).toEqual('PUT')
      expect(request.request.body).toEqual(mockUpdateReservation)

      const response = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: mockUpdateReservation,
      })
      request.event(response)
    })
  })

  describe('#add', () => {
    const mockAddReservation = {
      tenantId: 1,
      propertyId: 1,
      guestNumber: 3,
      checkIn: '02/12/2020',
      checkOut: '05/12/2020',
      specialRequest: '',
    } as IReservation

    const mockAddReservationResult = {
      id: 3,
      tenantId: 1,
      propertyId: 1,
      guestNumber: 3,
      checkIn: '02/12/2020',
      checkOut: '05/12/2020',
      specialRequest: '',
    } as IReservation

    it('should add a new reservation', () => {
      service
        .add(mockAddReservation)
        .subscribe((result) => expect(result).toEqual(mockAddReservationResult))

      const request = httpTestingController.expectOne('api/reservations')
      expect(request.request.method).toEqual('POST')
      request.flush(mockAddReservationResult)
    })
  })

  describe('#delete', () => {
    it('should delete the reservation matching the passed id/reservation', () => {
      service.getAll()
      service.delete(1).subscribe()
      service.reservations$.subscribe((result) =>
        expect(result).toEqual(RESERVATIONS_MOCK_DATA.slice(1))
      )

      const deleteReq = httpTestingController.expectOne('api/reservations/1')
      expect(deleteReq.request.method).toEqual('DELETE')
      const getReq = httpTestingController.expectOne('api/reservations')
      getReq.flush(RESERVATIONS_MOCK_DATA.slice(1))
    })
  })
})
