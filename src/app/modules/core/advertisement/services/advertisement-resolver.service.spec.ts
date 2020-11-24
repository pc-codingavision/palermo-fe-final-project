import { TestBed } from '@angular/core/testing'
import { AdvertisementResolver } from '@modules/core/advertisement/services/advertisement-resolver.ts'

describe('AdvertisementResolver', () => {
  let service: AdvertisementResolver

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementResolver)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
