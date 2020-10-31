import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LatestContainerComponent } from './latest-container.component'

describe('LatestContainerComponent', () => {
  let component: LatestContainerComponent
  let fixture: ComponentFixture<LatestContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LatestContainerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
