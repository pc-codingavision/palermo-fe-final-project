import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ButtonsContainerComponent } from './buttons-container.component'

describe('ButtonsContainerComponent', () => {
  let component: ButtonsContainerComponent
  let fixture: ComponentFixture<ButtonsContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
