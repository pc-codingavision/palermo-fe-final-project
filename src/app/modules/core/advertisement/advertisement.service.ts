import { Injectable } from '@angular/core'
import { MOCKADVERTISEMENTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'

import { IMockAdvertisement } from './../../../shared/models/mock-data/data'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  findAll(): Observable<IMockAdvertisement[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA)
  }

  findById(id: number): Observable<IMockAdvertisement> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA.find((advert) => advert.id === id))
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<any[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA.slice(start, end))
  }
}
