import { Overlay } from '@angular/cdk/overlay'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { commonTestingModules } from '@shared/common.testing'

import { EditComponent } from './edit.component'

describe('EditContainerComponent', () => {
  let component: EditComponent
  let fixture: ComponentFixture<EditComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EditComponent],
        imports: [commonTestingModules],
        providers: [MatSnackBar, Overlay],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
