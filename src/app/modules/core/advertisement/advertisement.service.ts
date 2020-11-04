import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import { Observable, of } from 'rxjs'

import {
  ADVERTISEMENTS_MOCK_DATA,
  LANDLORDS_MOCK_DATA,
  PROPERTIES_MOCK_DATA,
} from './../../../shared/models/mock-data/data'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  findAll(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA)
  }

  findById(id: number): Observable<IAdvertisement> {
    return of(ADVERTISEMENTS_MOCK_DATA.find((advert) => (advert.id = id)))
  }

  getAll(): Observable<any[]> {
    return of(
      (ADVERTISEMENTS_MOCK_DATA.map((adv, i) => {
        if (adv.propertyId === PROPERTIES_MOCK_DATA[i].id) {
          return Object.assign({}, adv, PROPERTIES_MOCK_DATA[i])
        }
      })).map((adv, i) => {
        if (adv.landlordId === LANDLORDS_MOCK_DATA[i].id) {
          return Object.assign({}, adv, LANDLORDS_MOCK_DATA[i])
        }
      })
    )
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<any[]> {
    return of(
      ADVERTISEMENTS_MOCK_DATA.map((adv, i) => {
        if (adv.propertyId === PROPERTIES_MOCK_DATA[i].id) {
          return Object.assign({}, adv, PROPERTIES_MOCK_DATA[i])
        }
      }).slice(start, end)
    )
  }
}
