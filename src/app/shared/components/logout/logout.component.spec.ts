import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { AuthService } from '@modules/core/auth/auth.service'
import { LogoutComponent } from '@shared/components/logout/logout.component'

describe('LogoutComponent', () => {
  let component: LogoutComponent
  let fixture: ComponentFixture<LogoutComponent>

  const spyAuthService = jasmine.createSpyObj('AuthService', ['logout'])
  const spyRouter = jasmine.createSpyObj('Router', ['navigate'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      providers: [
        { provide: AuthService, useValue: spyAuthService },
        { provide: Router, useValue: spyRouter },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
