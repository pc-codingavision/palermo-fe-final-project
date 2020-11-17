import { Injectable } from '@angular/core'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IFacilities } from '@shared/models/property'
import * as _ from 'lodash'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

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

  returnPriceFilteredAdvertisements(filter: number): Observable<MockAdvertisement[]> {
    return of(this.advertisements).pipe(
      map((filteredAdvertisements: MockAdvertisement[]) => {
        return filteredAdvertisements.filter((x) => x.price <= filter)
      })
    )
  }

  returnScoreFilteredAdvertisements(filter: number): Observable<MockAdvertisement[]> {
    const filteredArray: MockAdvertisement[] = []
    return of(this.advertisements).pipe(
      map((sourceArray: MockAdvertisement[]) => {
        sourceArray.forEach((advertisement) => {
          if (advertisement.score >= filter) {
            filteredArray.push(advertisement)
          }
        })
        return filteredArray
      })
    )
  }

  returnFacilitiesFilteredAdvertisements(
    filter: IFacilities
  ): Observable<MockAdvertisement[]> {
    const filteredArray: MockAdvertisement[] = []
    const filterFacilities = Object.keys(_.pickBy(filter))
    return of(this.advertisements).pipe(
      map((sourceArray: MockAdvertisement[]) => {
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
    return of(_.max(this.advertisements.map((adv) => adv.price)))
  }

  findAdvertisementsLowestPrice(): Observable<number> {
    return of(_.min(this.advertisements.map((adv) => adv.price)))
  }
}
