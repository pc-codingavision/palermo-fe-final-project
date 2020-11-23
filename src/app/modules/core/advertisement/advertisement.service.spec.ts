import { TestBed } from '@angular/core/testing'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

describe('AdvertisementService', () => {
  let service: AdvertisementService
  let mockData: MockAdvertisement[]

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
    mockData = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
      MockAdvertisement.Build(advertisement)
    )
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('#findAll', () => {
    it('should return all advertisements', () => {
      service
        .findAll()
        .subscribe((advertisements) => expect(advertisements).toEqual(mockData))
    })
  })

  describe('#findById', () => {
    it('should return specific advertisement based on the passed id', () => {
      service
        .findById(1)
        .subscribe((advertisement) => expect(advertisement).toEqual(mockData[0]))
    })

    it('should return undefined if the passed id does not exist on advertisements data', () => {
      service
        .findById(5)
        .subscribe((advertisement) => expect(advertisement).toBeUndefined())
    })
  })

  describe('#getLatestAdv', () => {
    it('should always return an array of adv with lenght of two', () => {
      service.getLatestAdv().subscribe((arr) => {
        expect(arr.length).toBe(2)
      })
    })

    it('should return adv with id=1, id=2, for first', () => {
      service.getLatestAdv().subscribe((arr) => {
        expect(arr[0].id).toBe(1)
        expect(arr[1].id).toBe(2)
      })
    })

    it('should return adv with id=2, id=3, if the user goes forward', () => {
      service.getLatestAdv(1, 3).subscribe((arr) => {
        expect(arr[0].id).toBe(2)
        expect(arr[1].id).toBe(3)
      })
    })
  })
})
