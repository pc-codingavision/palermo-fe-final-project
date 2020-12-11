import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'

import { AuthService } from '../../../modules/core/auth/auth.service'
import { commonTestingModules } from '../../common.testing'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [...commonTestingModules],
      providers: [{ provide: AuthService, useClass: InMemoryAuthService }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
