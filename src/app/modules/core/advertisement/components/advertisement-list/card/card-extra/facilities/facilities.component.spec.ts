import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FacilitiesComponent } from './facilities.component'

describe('FacilitiesComponent', () => {
  let component: FacilitiesComponent
  let fixture: ComponentFixture<FacilitiesComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FacilitiesComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
