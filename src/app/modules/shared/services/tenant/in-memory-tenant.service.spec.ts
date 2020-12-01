import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

import { InMemoryTenantService } from './in-memory-tenant.service'

describe('InMemoryTenantService', () => {
  let service: InMemoryTenantService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(InMemoryTenantService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
