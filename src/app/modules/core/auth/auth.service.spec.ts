import { TestBed } from '@angular/core/testing'
import { AuthService } from '@modules/core/auth/auth.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useClass: AuthService }],
    })
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
