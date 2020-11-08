import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { FacilitiesContainerComponent } from './facilities-container.component'

describe('FacilitiesContainerComponent', () => {
  let component: FacilitiesContainerComponent
  let fixture: ComponentFixture<FacilitiesContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FacilitiesContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
