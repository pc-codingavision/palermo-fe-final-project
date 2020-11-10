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
    mockData = MOCKADVERTISEMENTS_MOCK_DATA.map((a) => ({ ...a }))
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all advertisements', () => {
    service
      .findAll()
      .subscribe((advertisements) => expect(advertisements).toEqual(mockData))
  })

  it('should return specific advertisement based on the passed id', () => {
    service
      .findById(1)
      .subscribe((advertisement) => expect(advertisement).toEqual(mockData[0]))
  })

  it('should return price filtered advertisements', () => {
    service
      .returnPriceFilteredAdvertisements(20)
      .subscribe((filteredAdvertisements) =>
        expect(filteredAdvertisements).toContain(mockData[2])
      )
  })

  it('should return score filtered advertisements', () => {
    service
      .returnScoreFilteredAdvertisements(4)
      .subscribe((filteredAdvertisements) =>
        expect(filteredAdvertisements).toEqual(mockData.slice(0, 2))
      )
  })

  it('should return the highest price between advertisements', () => {
    service
      .findAdvertisementsHighestPrice()
      .subscribe((filteredAdvertisementPrice) =>
        expect(filteredAdvertisementPrice).toEqual(40)
      )
  })

  it('should return the lowest price between advertisements', () => {
    service
      .findAdvertisementsLowestPrice()
      .subscribe((filteredAdvertisementPrice) =>
        expect(filteredAdvertisementPrice).toEqual(20)
      )
  })
})
