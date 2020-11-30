import { TestBed } from '@angular/core/testing'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { InMemoryDataService } from '@shared/services/in-memory-data.service'

import { ADVERTISEMENTS_MOCK_DATA } from './../models/mock-data/data'

describe('InMemoryDataService', () => {
  let service: InMemoryDataService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(InMemoryDataService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('#createDb, should return an Object (database) with the list of advertisements and landlords', () => {
    it('the object should have two properties: advertisements and landlords', () => {
      expect(service.createDb().hasOwnProperty('advertisements', 'landlords')).toBeTrue()
    })

    it('the advertisements property should contain the advertisements mock data', () => {
      expect(service.createDb().advertisements).toEqual(ADVERTISEMENTS_MOCK_DATA)
    })

    it('the landlords property should contain the landlords mock data', () => {
      expect(service.createDb().landlords).toEqual(LANDLORDS_MOCK_DATA)
    })
  })

  describe('#genId, should generate an id for the passed array', () => {
    it('should return the highest advertisement id + 1 if an array of advertisements has been passed', () => {
      expect(service.genId(ADVERTISEMENTS_MOCK_DATA)).toBe(4)
    })

    it('should return the highest landlord id + 1 if an array of landlords has been passed', () => {
      expect(service.genId(LANDLORDS_MOCK_DATA)).toBe(4)
    })
  })
})
