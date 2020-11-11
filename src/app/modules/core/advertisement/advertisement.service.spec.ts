import { TestBed } from '@angular/core/testing'

import { AdvertisementService } from './advertisement.service'

describe('AdvertisementService', () => {
  let service: AdvertisementService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AdvertisementService)
  })

  it('#getLatestAdv always should return an array of adv with lenght of two', () => {
    service.getLatestAdv().subscribe((arr) => {
      expect(arr.length).toBe(2)
    })
  })

  it('#getLatestAdv should return adv with id=1, id=2, for first', () => {
    service.getLatestAdv().subscribe((arr) => {
      expect(arr[0].id).toBe(1)
      expect(arr[1].id).toBe(2)
    })
  })

  it('#getLatestAdv should return adv with id=2, id=3, if the user goes forward', () => {
    service.getLatestAdv(1, 2).subscribe((arr) => {
      expect(arr[0].id).toBe(2)
      expect(arr[1].id).toBe(3)
    })
  })
})
