import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { LatestMiniCardComponent } from './latest-mini-card.component'

describe('LatestMiniCardComponent', () => {
  let component: LatestMiniCardComponent
  let fixture: ComponentFixture<LatestMiniCardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LatestMiniCardComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMiniCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
