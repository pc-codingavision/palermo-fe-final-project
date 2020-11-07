import { TestBed } from '@angular/core/testing'

import { AdvertisementService } from './advertisement.service'

describe('AdvertisementService', () => {
  let service: AdvertisementService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
  })

  it('#getLatestAdv should return adv with id=1, id=2, for first', () => {
    service.getLatestAdv().subscribe((arr) => expect(arr[0].id).toBe(1))
    service.getLatestAdv().subscribe((arr) => expect(arr[1].id).toBe(2))
  })

  it('#getLatestAdv should return adv with id=2, id=3, if the user goes forward', () => {
    service.getLatestAdv(1, 2).subscribe((arr) => expect(arr[0].id).toBe(2))
    service.getLatestAdv(1, 2).subscribe((arr) => expect(arr[1].id).toBe(3))
  })
})
