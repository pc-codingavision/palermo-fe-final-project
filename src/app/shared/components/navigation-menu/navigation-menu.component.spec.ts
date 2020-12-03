import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { commonTestingModules } from '@shared/common.testing'

import { NavigationMenuComponent } from './navigation-menu.component'

describe('NavigationMenuComponent', () => {
  let component: NavigationMenuComponent
  let fixture: ComponentFixture<NavigationMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [NavigationMenuComponent],
      providers: commonTestingModules.concat([
        { provide: AuthService, useClass: InMemoryAuthService },
      ]),
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
