import { Overlay } from '@angular/cdk/overlay'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

describe('AdvertisementService', () => {
  let service: AdvertisementService
  let httpTestingController: HttpTestingController
  let mockData: MockAdvertisement[]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [AdvertisementService, MatSnackBar, Overlay],
    })
    service = TestBed.inject(AdvertisementService)
    httpTestingController = TestBed.inject(HttpTestingController)
    mockData = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
      MockAdvertisement.Build(advertisement)
    )
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('#findAll', () => {
    it('should return expected advs (called once)', () => {
      service.findAll().subscribe((advs) => expect(advs).toEqual(mockData), fail)

      const req = httpTestingController.expectOne(service.advertisementsUrl)
      expect(req.request.method).toEqual('GET')
      req.flush(mockData)
    })

    it('should be ok returning no advs', () => {
      service.findAll().subscribe((advs) => expect(advs.length).toEqual(0))

      const req = httpTestingController.expectOne(service.advertisementsUrl)
      req.flush([])
    })

    it('should turn 404 into an empty advs result', () => {
      service.findAll().subscribe((advs) => expect(advs.length).toEqual(0), fail)

      const req = httpTestingController.expectOne(service.advertisementsUrl)

      const msg = 'deliberate 404 error'
      req.flush(msg, { status: 404, statusText: 'Not Found' })
    })
  })

  describe('#findById', () => {
    it('should return specific advertisement based on the passed id', () => {
      service
        .findById(1)
        .subscribe((advertisement) => expect(advertisement).toEqual(mockData[0]))

      const req = httpTestingController.expectOne('api/advertisements/1')
      expect(req.request.method).toEqual('GET')
      req.flush(mockData[0])
    })

    it('should return undefined if the passed id does not exist on advertisements data', () => {
      service
        .findById(20)
        .subscribe((advertisement) => expect(advertisement).toBeUndefined())

      const req = httpTestingController.expectOne('api/advertisements/20')
      expect(req.request.method).toEqual('GET')
      const msg = 'Advertisement not found'
      req.flush(msg)
    })
  })

  describe('#getLatestAdv', () => {
    it('should always return an array of adv with lenght of two', () => {
      service.getLatestAdv().subscribe((arr) => {
        expect(arr.length).toBe(2)
      })

      const req = httpTestingController.expectOne('api/advertisements')
      expect(req.request.method).toEqual('GET')
      req.flush([mockData[0], mockData[1]])
    })

    it('should return adv with id=1, id=2, for first', () => {
      service.getLatestAdv().subscribe((arr) => {
        expect(arr[0].id).toBe(1)
        expect(arr[1].id).toBe(2)
      })

      const req = httpTestingController.expectOne('api/advertisements')
      expect(req.request.method).toEqual('GET')
      req.flush(mockData.slice(0, 2))
    })

    it('should return adv with id=2, id=3, if the user goes forward', () => {
      service.getLatestAdv().subscribe((arr) => {
        expect(arr[0].id).toBe(2)
        expect(arr[1].id).toBe(3)
      })

      const req = httpTestingController.expectOne('api/advertisements')
      expect(req.request.method).toEqual('GET')

      req.flush(mockData.slice(1, 3))
    })
  })
})
