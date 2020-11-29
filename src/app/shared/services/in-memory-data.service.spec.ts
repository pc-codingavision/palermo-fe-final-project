import { TestBed } from '@angular/core/testing'
import { Advertisement } from '@shared/models/advertisement'
import { Landlord } from '@shared/models/landlord'
import {
  ADVERTISEMENTS_MOCK_DATA,
  LANDLORDS_MOCK_DATA,
} from '@shared/models/mock-data/data'
import { InMemoryDataService } from '@shared/services/in-memory-data.service'

describe('InMemoryDataService', () => {
  let service: InMemoryDataService
  let advertisementsMockData: Advertisement[]
  let landlordsMockData: Landlord[]

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(InMemoryDataService)
    advertisementsMockData = ADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
      Advertisement.Build(advertisement)
    )
    landlordsMockData = LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord))
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('#createDb, should return an Object (database) with the list of advertisements and landlords', () => {
    it('the object should have two properties: advertisements and landlords', () => {
      expect(service.createDb().hasOwnProperty('advertisements', 'landlords')).toBeTrue()
    })

    it('the advertisements property should contain the advertisements mock data', () => {
      expect(service.createDb().advertisements).toEqual(advertisementsMockData)
    })

    it('the landlords property should contain the landlords mock data', () => {
      expect(service.createDb().landlords).toEqual(landlordsMockData)
    })
  })

  describe('#genId, should generate an id for the passed array', () => {
    it('should return the highest advertisement id + 1 if an array of advertisements has been passed', () => {
      expect(service.genId(advertisementsMockData)).toBe(4)
    })

    it('should return the highest landlord id + 1 if an array of landlords has been passed', () => {
      expect(service.genId(landlordsMockData)).toBe(4)
    })
  })
})
