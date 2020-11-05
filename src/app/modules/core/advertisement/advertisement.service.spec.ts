import { TestBed } from '@angular/core/testing'

import { ADVERTISEMENTS_MOCK_DATA } from './../../../shared/models/mock-data/data'
import { AdvertisementService } from './advertisement.service'

describe('AdvertisementService', () => {
  let service: AdvertisementService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all advertisements', () => {
    expect(
      service
        .findAll()
        .subscribe((advertisements) =>
          expect(advertisements).toEqual(ADVERTISEMENTS_MOCK_DATA)
        )
    )
  })

  it('should return specific advertisement based on the passed id', () => {
    expect(
      service
        .findById(1)
        .subscribe((advertisement) =>
          expect(advertisement).toEqual(ADVERTISEMENTS_MOCK_DATA[0])
        )
    )
  })

  it('should return filtered advertisements', () => {
    expect(
      service
        .returnPriceFilteredAdvertisements(20)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual([ADVERTISEMENTS_MOCK_DATA[2]])
        )
    )
  })

  it('should return the highest price between advertisements', () => {
    expect(
      service
        .findAdvertisementsHighestPrice()
        .subscribe((filteredAdvertisementPrice) =>
          expect(filteredAdvertisementPrice).toEqual(40)
        )
    )
  })

  it('should return the lowest price between advertisements', () => {
    expect(
      service
        .findAdvertisementsLowestPrice()
        .subscribe((filteredAdvertisementPrice) =>
          expect(filteredAdvertisementPrice).toEqual(20)
        )
    )
  })
})
