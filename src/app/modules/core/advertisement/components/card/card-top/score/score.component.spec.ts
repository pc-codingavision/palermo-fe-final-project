import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ScoreComponent } from './score.component'

describe('ScoreComponent', () => {
  let component: ScoreComponent
  let fixture: ComponentFixture<ScoreComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ScoreComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
