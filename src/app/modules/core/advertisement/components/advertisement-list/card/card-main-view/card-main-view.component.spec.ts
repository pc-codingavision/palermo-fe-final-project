import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CardMainViewComponent } from './card-main-view.component'

describe('CardMainViewComponent', () => {
  let component: CardMainViewComponent
  let fixture: ComponentFixture<CardMainViewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardMainViewComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMainViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
