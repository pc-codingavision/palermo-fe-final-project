import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FacilityComponent } from './facility.component'

describe('FacilityComponent', () => {
  let component: FacilityComponent
  let fixture: ComponentFixture<FacilityComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FacilityComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
