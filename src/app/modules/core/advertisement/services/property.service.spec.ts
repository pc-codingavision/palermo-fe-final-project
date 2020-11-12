import { TestBed } from '@angular/core/testing'
import { PROPERTIES_MOCK_DATA } from '@shared/models/mock-data/data'

import { PropertyService } from './property.service'

describe('PropertyService', () => {
  let service: PropertyService

  const mockProperty = PROPERTIES_MOCK_DATA[0]

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PropertyService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return all properties', () => {
    expect(
      service
        .findAll()
        .subscribe((properties) => expect(properties).toEqual(PROPERTIES_MOCK_DATA))
    )
  })

  it('should return specific property based on the passed id', () => {
    expect(
      service.findById(1).subscribe((property) => expect(property).toEqual(mockProperty))
    )
  })
})
