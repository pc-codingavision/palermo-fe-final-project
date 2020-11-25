import { TestBed } from '@angular/core/testing'

import { SpinnerService } from './spinner.service'

describe('SpinnerService', () => {
  let service: SpinnerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SpinnerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('#showSpinner should show the spinner', () => {
    service.showSpinner()
    service.spinnerStatus.subscribe((val) => expect(val).toBeTrue())
  })

  it('#hideSpinner should hide the spinner', () => {
    service.hideSpinner()
    service.spinnerStatus.subscribe((val) => expect(val).toBeFalse())
  })
})
