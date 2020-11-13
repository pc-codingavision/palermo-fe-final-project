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

  getAdvertisementsFilteredByPrice(filter: number): Observable<IMockAdvertisement[]> {
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((advertisements: IMockAdvertisement[]) => {
        return advertisements.filter((advertisement) => advertisement.price <= filter)
      })
    )
  }

  getAdvertisementsFilteredByScore(filter: number): Observable<IMockAdvertisement[]> {
    const filteredAdvertisements: IMockAdvertisement[] = []
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((advertisements: IMockAdvertisement[]) => {
        advertisements.forEach((advertisement) => {
          const score = _.mean(advertisement.reviews.map((review) => review.vote))
          if (_.round(score) >= filter) {
            filteredAdvertisements.push(advertisement)
          }
        })
        return filteredAdvertisements
      })
    )
  }

  getAdvertisementsFilteredByFacilities(
    filter: IFacilities
  ): Observable<IMockAdvertisement[]> {
    const filteredAdvertisements: IMockAdvertisement[] = []
    const filterActiveFacilities = Object.keys(_.pickBy(filter))
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((advertisements: IMockAdvertisement[]) => {
        advertisements.forEach((advertisement) => {
          const propertyActiveFacilities = _.pickBy(advertisement.property.facilities)
          if (
            filterActiveFacilities.every((facility) =>
              propertyActiveFacilities.hasOwnProperty(facility)
            )
          ) {
            filteredAdvertisements.push(advertisement)
          }
        })
        return filteredAdvertisements
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
