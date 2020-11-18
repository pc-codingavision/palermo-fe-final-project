import { TestBed } from '@angular/core/testing'
import { DataResolver } from '@modules/core/advertisement/services/data-resolver'

describe('DataResolver', () => {
  let service: DataResolver

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DataResolver)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
