import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { ButtonContainerComponent } from './button-container.component'

describe('ButtonContainerComponent', () => {
  let component: ButtonContainerComponent
  let fixture: ComponentFixture<ButtonContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
