import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CheckInCheckOutComponent } from './check-in-check-out.component'

describe('CheckInCheckOutComponent', () => {
  let component: CheckInCheckOutComponent
  let fixture: ComponentFixture<CheckInCheckOutComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CheckInCheckOutComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInCheckOutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})