import { TestBed } from '@angular/core/testing'
import { IAdvertisement } from '@shared/models/advertisement'

import { ADVERTISEMENTS_MOCK_DATA } from './../../../shared/models/mock-data/data'
import { AdvertisementService } from './advertisement.service'

describe('AdvertisementService', () => {
  let service: AdvertisementService
  let mockData: IAdvertisement[]

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
    mockData = ADVERTISEMENTS_MOCK_DATA.map((a) => ({ ...a }))
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all advertisements', () => {
    service
      .findAll()
      .subscribe((advertisements) => expect(advertisements).toEqual(mockData))
  })

  xit('should return specific advertisement based on the passed id', () => {
    service
      .findById(1)
      .subscribe((advertisement) => expect(advertisement).toEqual(mockData[0]))
  })

  xit('should return price filtered advertisements', () => {
    service
      .returnPriceFilteredAdvertisements(20)
      .subscribe((filteredAdvertisements) =>
        expect(filteredAdvertisements).toEqual([mockData[2]])
      )
  })

  xit('should return score filtered advertisements', () => {
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
