import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ReviewDialogComponent } from './review-dialog.component'

describe('CustomReviewDialogComponent', () => {
  let component: ReviewDialogComponent
  let fixture: ComponentFixture<ReviewDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewDialogComponent],
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
