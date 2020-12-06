import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SharedModule } from '@modules/shared/shared.module'

import { ReviewDialogComponent } from './review-dialog.component'

describe('CustomReviewDialogComponent', () => {
  let component: ReviewDialogComponent
  let fixture: ComponentFixture<ReviewDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewDialogComponent],
      imports: [SharedModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: [] }],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
