import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { EditContainerComponent } from './edit-container.component'

describe('EditContainerComponent', () => {
  let component: EditContainerComponent
  let fixture: ComponentFixture<EditContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditContainerComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
