import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ReviewComponent } from './review.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@modules/shared/material.module'

describe('ReviewComponent', () => {
  let component: ReviewComponent
  let fixture: ComponentFixture<ReviewComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ReviewComponent],
        imports: [ReactiveFormsModule, MaterialModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
