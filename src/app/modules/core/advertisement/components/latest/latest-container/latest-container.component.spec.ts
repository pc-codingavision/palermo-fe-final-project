import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { LatestContainerComponent } from './latest-container.component'

describe('LatestContainerComponent', () => {
  let component: LatestContainerComponent
  let fixture: ComponentFixture<LatestContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LatestContainerComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
