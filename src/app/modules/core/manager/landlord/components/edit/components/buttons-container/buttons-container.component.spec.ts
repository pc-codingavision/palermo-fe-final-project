import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { ButtonsContainerComponent } from './buttons-container.component'

describe('ButtonsContainerComponent', () => {
  let component: ButtonsContainerComponent
  let fixture: ComponentFixture<ButtonsContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ButtonsContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
