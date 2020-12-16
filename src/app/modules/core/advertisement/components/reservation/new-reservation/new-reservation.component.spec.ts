import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from '@modules/shared/shared.module'

import { NewReservationComponent } from './new-reservation.component'

describe('NewReservationComponent', () => {
  let component: NewReservationComponent
  let fixture: ComponentFixture<NewReservationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewReservationComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
