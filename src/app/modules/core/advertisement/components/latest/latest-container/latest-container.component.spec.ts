import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { commonTestingModules } from '@shared/common.testing'

import { LatestContainerComponent } from './latest-container.component'

describe('LatestContainerComponent', () => {
  let component: LatestContainerComponent
  let fixture: ComponentFixture<LatestContainerComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LatestContainerComponent],
        imports: [commonTestingModules],
        providers: [MatSnackBar, Overlay],
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
