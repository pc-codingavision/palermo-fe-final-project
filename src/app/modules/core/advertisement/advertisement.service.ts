import { Injectable } from '@angular/core'
import { IAdvertisement } from '@shared/models/advertisement'
import { ADVERTISEMENTS_MOCK_DATA } from '@shared/models/mock-data/data'
import * as _ from 'lodash'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  findAll(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA)
  }

  findById(id: number): Observable<IAdvertisement> {
    return of(ADVERTISEMENTS_MOCK_DATA.find((advert) => advert.id === id))
  }

  returnPriceFilteredAdvertisements(filter: number): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((filteredAdvertisements: IAdvertisement[]) => {
        return filteredAdvertisements.filter((x) => x.price <= filter)
      })
    )
  }

  returnScoreFilteredAdvertisements(filter: number): Observable<IAdvertisement[]> {
    const filteredArray: IAdvertisement[] = []
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IAdvertisement[]) => {
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
    return of(_.max(ADVERTISEMENTS_MOCK_DATA.map((adv) => adv.price)))
  }

  findAdvertisementsLowestPrice(): Observable<number> {
    return of(_.min(ADVERTISEMENTS_MOCK_DATA.map((adv) => adv.price)))
  }
}
