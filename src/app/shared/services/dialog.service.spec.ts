import { TestBed } from '@angular/core/testing'

import { DialogService } from './dialog.service'

describe('DialogService', () => {
  let service: DialogService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DialogService)
  })

  xit('should be created', () => {
    expect(service).toBeTruthy()
  })
})
