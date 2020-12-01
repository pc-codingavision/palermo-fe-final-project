import { Overlay } from '@angular/cdk/overlay'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'

describe('ReservationService', () => {
  let service: ReservationService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatSnackBar, Overlay],
    })
    service = TestBed.inject(ReservationService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
