import { TestBed } from '@angular/core/testing'

import { AuthHttpInterceptor } from './auth-http-interceptor'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('AuthHttpInterceptorService', () => {
  let service: AuthHttpInterceptor

  const authServiceSpy = jasmine.createSpyObj('AuthService', ['getToken'])
  const routerSpy = jasmine.createSpyObj('Router', ['navigate'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthHttpInterceptor,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    })
    service = TestBed.inject(AuthHttpInterceptor)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
