import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { CardMainContainerComponent } from '@modules/core/advertisement/components/card/card-top/card-main-container/card-main-container.component'
import { InMemoryAuthService } from '@modules/core/auth/auth-in-memory.service'
import { AuthService } from '@modules/core/auth/auth.service'

describe('CardMainContainerComponent', () => {
  let component: CardMainContainerComponent
  let fixture: ComponentFixture<CardMainContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardMainContainerComponent],
        imports: [MatDialogModule, MatSnackBarModule, HttpClientModule],
        providers: [{ provide: AuthService, useClass: InMemoryAuthService }],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMainContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
