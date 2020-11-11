import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { EditComponent } from './edit.component'

describe('EditContainerComponent', () => {
  let component: EditComponent
  let fixture: ComponentFixture<EditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
