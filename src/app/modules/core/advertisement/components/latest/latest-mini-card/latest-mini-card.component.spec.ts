import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { LatestMiniCardComponent } from './latest-mini-card.component'

xdescribe('LatestMiniCardComponent', () => {
  let component: LatestMiniCardComponent
  let fixture: ComponentFixture<LatestMiniCardComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LatestMiniCardComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMiniCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
