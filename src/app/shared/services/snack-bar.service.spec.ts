import { Overlay } from '@angular/cdk/overlay'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { SnackBarService } from './snack-bar.service'

describe('SnackBarService', () => {
  let service: SnackBarService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [MatSnackBar, Overlay],
    })
    service = TestBed.inject(SnackBarService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
