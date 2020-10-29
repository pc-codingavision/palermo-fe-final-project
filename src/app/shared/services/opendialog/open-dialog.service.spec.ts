import { TestBed } from '@angular/core/testing'

import { OpenDialogService } from './open-dialog.service'

describe('OpenDialogService', () => {
  let service: OpenDialogService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(OpenDialogService)
  })

  xit('should be created', () => {
    expect(service).toBeTruthy()
  })

  xit('#openDialog should have been call', () => {
    const test = service.openDialog({
      h1: 'testH1',
      h2: 'testH2',
      p: 'testP',
      returnValue: 'testReturnValue',
    })
    expect(test).toHaveBeenCalledWith({
      h1: 'testH1',
      h2: 'testH2',
      p: 'testP',
      returnValue: 'testReturnValue',
    })
  })
})
