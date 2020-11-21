import { TestBed } from '@angular/core/testing'

import { DeactivateGuard } from './deactivate-guard.service'

describe('DeactivateGuard', () => {
  let service: DeactivateGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DeactivateGuard)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
