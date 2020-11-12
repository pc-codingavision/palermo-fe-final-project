import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { RouterTestingModule } from '@angular/router/testing'

import { EditComponent } from './edit.component'

describe('EditContainerComponent', () => {
  let component: EditComponent
  let fixture: ComponentFixture<EditComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [MatSnackBar, Overlay],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
