import { Injectable } from '@angular/core'
import {
  IMockAdvertisement,
  MOCKADVERTISEMENTS_MOCK_DATA,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IFacilities } from '@shared/models/property'
import * as _ from 'lodash'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

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

  returnPriceFilteredAdvertisements(filter: number): Observable<IMockAdvertisement[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((filteredAdvertisements: IMockAdvertisement[]) => {
        return filteredAdvertisements.filter((x) => x.price <= filter)
      })
    )
  }

  returnScoreFilteredAdvertisements(filter: number): Observable<IMockAdvertisement[]> {
    const filteredArray: IMockAdvertisement[] = []
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IMockAdvertisement[]) => {
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

  returnFacilitiesFilteredAdvertisements(
    filter: IFacilities
  ): Observable<IMockAdvertisement[]> {
    const filteredArray: IMockAdvertisement[] = []
    const filterFacilities = Object.keys(_.pickBy(filter))
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IMockAdvertisement[]) => {
        sourceArray.forEach((advertisement) => {
          const propertyFacilities = _.pickBy(advertisement.property.facilities)
          if (
            filterFacilities.every((facility) =>
              propertyFacilities.hasOwnProperty(facility)
            )
          ) {
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
