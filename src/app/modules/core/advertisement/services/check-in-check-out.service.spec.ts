import { TestBed } from '@angular/core/testing'

import { CheckInCheckOutService } from './check-in-check-out.service'

describe('CheckInCheckOutService', () => {
  let service: CheckInCheckOutService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CheckInCheckOutService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
