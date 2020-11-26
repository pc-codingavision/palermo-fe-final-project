import { Injectable } from '@angular/core'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  advertisements = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
    MockAdvertisement.Build(advertisement)
  )

  constructor() {}

  findAll(): Observable<MockAdvertisement[]> {
    return of(this.advertisements)
  }

  findById(id: number): Observable<MockAdvertisement> {
    return of(this.advertisements.find((advert) => advert.id === id))
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<MockAdvertisement[]> {
    return of(this.advertisements.slice(start, end))
  }
}
