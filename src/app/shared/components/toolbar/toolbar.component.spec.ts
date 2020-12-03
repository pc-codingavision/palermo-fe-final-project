import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MediaObserver } from '@angular/flex-layout'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { MediaObserverFake, commonTestingModules } from '@shared/common.testing'

import { ToolbarComponent } from './toolbar.component'

describe('ToolbarComponent', () => {
  let component: ToolbarComponent
  let fixture: ComponentFixture<ToolbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [ToolbarComponent],
      providers: commonTestingModules.concat([
        { provide: AuthService, useClass: InMemoryAuthService },
        { provide: MediaObserver, useClass: MediaObserverFake },
      ]),
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
