import { TestBed } from '@angular/core/testing'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import {
  IMockAdvertisement,
  MOCKADVERTISEMENTS_MOCK_DATA,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

describe('AdvertisementService', () => {
  let service: AdvertisementService
  let mockData: IMockAdvertisement[]

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

  describe('#getAdvertisementsFilteredByPrice', () => {
    it('should return an array of advertisements that match price filter criteria', () => {
      service
        .getAdvertisementsFilteredByPrice(20)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toContain(mockData[2])
        )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      service
        .getAdvertisementsFilteredByPrice(10)
        .subscribe((filteredAdvertisements) => expect(filteredAdvertisements).toEqual([]))
    })
  })

  describe('#getdvertisementsFilteredByScore', () => {
    it('should return an array of advertisements that match score filter criteria', () => {
      service
        .getAdvertisementsFilteredByScore(4)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual(mockData.slice(0, 2))
        )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      service
        .getAdvertisementsFilteredByScore(8)
        .subscribe((filteredAdvertisements) => expect(filteredAdvertisements).toEqual([]))
    })
  })

  describe('#getAdvertisementsFilteredByFacilities', () => {
    const mockFacilitiesObj1 = {
      tv: true,
      wifi: false,
      breakfastIncluded: false,
      parking: false,
      kitchen: false,
      shower: false,
      bath: false,
    }

    const mockFacilitiesObj2 = {
      tv: true,
      wifi: true,
      breakfastIncluded: true,
      parking: true,
      kitchen: true,
      shower: true,
      bath: true,
    }

    it('should return an array of advertisements that match facilities filter criteria', () => {
      service
        .getAdvertisementsFilteredByFacilities(mockFacilitiesObj1)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual(mockData)
        )
    })

    it('should return an empty array if no advertisement facilities filter criteria', () => {
      service
        .getAdvertisementsFilteredByFacilities(mockFacilitiesObj2)
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
