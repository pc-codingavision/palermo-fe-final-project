import { TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { commonTestingModules, commonTestingProviders } from '@shared/common.testing'

import { AppComponent } from './app.component'

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [commonTestingModules.concat(RouterTestingModule, MatSnackBarModule)],
        declarations: [AppComponent],
        providers: commonTestingProviders.concat([
          { provide: AuthService, useClass: InMemoryAuthService },
        ]),
      }).compileComponents()
    })
  )

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'cav-final-project'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('Angular Course - Final Project')
  })
})
