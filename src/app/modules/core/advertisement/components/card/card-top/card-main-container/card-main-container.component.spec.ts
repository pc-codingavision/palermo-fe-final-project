import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { CardMainContainerComponent } from '@modules/core/advertisement/components/card/card-top/card-main-container/card-main-container.component'

describe('CardMainContainerComponent', () => {
  let component: CardMainContainerComponent
  let fixture: ComponentFixture<CardMainContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardMainContainerComponent],
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
