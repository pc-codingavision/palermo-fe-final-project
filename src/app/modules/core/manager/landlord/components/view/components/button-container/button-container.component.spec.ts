import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { MatDialogModule } from '@angular/material/dialog'

import { ButtonContainerComponent } from './button-container.component'

describe('ButtonContainerComponent', () => {
  let component: ButtonContainerComponent
  let fixture: ComponentFixture<ButtonContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonContainerComponent],
      imports: [MatDialogModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
