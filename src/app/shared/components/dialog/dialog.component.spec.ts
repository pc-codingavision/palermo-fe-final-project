import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { SharedModule } from '@modules/shared/shared.module'

import { DialogComponent } from './dialog.component'

describe('DialogComponent', () => {
  let component: DialogComponent
  let fixture: ComponentFixture<DialogComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DialogComponent],
        imports: [SharedModule],
        providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} },
        ],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
