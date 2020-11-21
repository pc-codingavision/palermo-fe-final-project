import { TestBed } from '@angular/core/testing'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'

import { DialogService } from './dialog.service'

describe('DialogService', () => {
  let service: DialogService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    })
    service = TestBed.inject(DialogService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
