import { TestBed } from '@angular/core/testing'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import {
  IMockAdvertisement,
  MOCKADVERTISEMENTS_MOCK_DATA,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'

fdescribe('AdvertisementService', () => {
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
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements.length).toBe(0)
        )
    })
  })

  describe('#returnScoreFilteredAdvertisements', () => {
    it('should return an array of advertisements that match score filter criteria', () => {
      service
        .returnScoreFilteredAdvertisements(4)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toContain(mockData[0], mockData[1])
        )
    })

    it('should return an empty array if no advertisement match filter criteria', () => {
      service
        .returnScoreFilteredAdvertisements(8)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements.length).toBe(0)
        )
    })
  })

  describe('#returnFacilitiesFilteredAdvertisements', () => {
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
        .returnFacilitiesFilteredAdvertisements(mockFacilitiesObj1)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements).toEqual(mockData)
        )
    })

    it('should return an empty array if no advertisement facilities filter criteria', () => {
      service
        .returnFacilitiesFilteredAdvertisements(mockFacilitiesObj2)
        .subscribe((filteredAdvertisements) =>
          expect(filteredAdvertisements.length).toBe(0)
        )
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
