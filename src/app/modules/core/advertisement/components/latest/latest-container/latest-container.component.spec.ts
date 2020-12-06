import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { LatestContainerComponent } from './latest-container.component'

describe('LatestContainerComponent', () => {
  let component: LatestContainerComponent
  let fixture: ComponentFixture<LatestContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LatestContainerComponent],
        imports: [HttpClientTestingModule],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
