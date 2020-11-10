import { Injectable } from '@angular/core'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  findAll(): Observable<MockAdvertisement[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA)
  }

  findById(id: number): Observable<MockAdvertisement> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA.find((advert) => advert.id === id))
  }

  returnPriceFilteredAdvertisements(filter: number): Observable<MockAdvertisement[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((filteredAdvertisements: MockAdvertisement[]) => {
        return filteredAdvertisements.filter((x) => x.price <= filter)
      })
    )
  }

  returnScoreFilteredAdvertisements(filter: number): Observable<MockAdvertisement[]> {
    const filteredArray: MockAdvertisement[] = []
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: MockAdvertisement[]) => {
        sourceArray.forEach((advertisement) => {
          const lenght = advertisement.reviews.length
          const score = advertisement.reviews
            .map((review) => review.vote)
            .reduce((a, b) => Math.round((a + b) / lenght))
          if (score >= filter) {
            filteredArray.push(advertisement)
          }
        })
        return filteredArray
      })
    )
  }

  findAdvertisementsHighestPrice(): Observable<number> {
    return of(_.max(MOCKADVERTISEMENTS_MOCK_DATA.map((adv) => adv.price)))
  }

  findAdvertisementsLowestPrice(): Observable<number> {
    return of(_.min(MOCKADVERTISEMENTS_MOCK_DATA.map((adv) => adv.price)))
  }
}
