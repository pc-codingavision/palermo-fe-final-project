import { TestBed } from '@angular/core/testing'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

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

  describe('#returnPriceFilteredAdvertisements', () => {
    it('should return an array of advertisements that match price filter criteria', () => {
      service
        .returnPriceFilteredAdvertisements(20)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toContain(mockData[2])
        )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      service
        .returnPriceFilteredAdvertisements(10)
        .subscribe((filteredAdvertisements) => expect(filteredAdvertisements).toEqual([]))
    })
  })

  describe('#returnScoreFilteredAdvertisements', () => {
    it('should return an array of advertisements that match score filter criteria', () => {
      service
        .returnScoreFilteredAdvertisements(4)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual(mockData.slice(0, 2))
        )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      service
        .returnScoreFilteredAdvertisements(8)
        .subscribe((filteredAdvertisements) => expect(filteredAdvertisements).toEqual([]))
    })
  })

  describe('#findAdvertisementsHighestPrice', () => {
    it('should return the highest price between advertisements', () => {
      const mockMaxPrice = _.max(mockData.map((adv) => adv.price))
      service
        .findAdvertisementsHighestPrice()
        .subscribe((maxPrice) => expect(maxPrice).toEqual(mockMaxPrice))
    })
  })

  describe('#findAdvertisementsLowestPrice', () => {
    it('shouldreturn the lowest price between advertisements', () => {
      const mockMinPrice = _.min(mockData.map((adv) => adv.price))
      service
        .findAdvertisementsLowestPrice()
        .subscribe((minPrice) => expect(minPrice).toEqual(mockMinPrice))
    })
  })
})
