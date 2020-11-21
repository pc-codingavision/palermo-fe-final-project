import { Injectable } from '@angular/core'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IFacilities } from '@shared/models/property'
import * as _ from 'lodash'
import { Observable, Subject, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  advertisements = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
    MockAdvertisement.Build(advertisement)
  )
  sidebarFilter = new Subject<any>()

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

  getAdvertisementsFilteredByPrice(filter: number): Observable<MockAdvertisement[]> {
    return of(this.advertisements).pipe(
      map((advertisements: MockAdvertisement[]) => {
        return advertisements.filter((advertisement) => advertisement.price <= filter)
      })
    )
  }

  getAdvertisementsFilteredByScore(filter: number): Observable<MockAdvertisement[]> {
    const filteredAdvertisements: MockAdvertisement[] = []
    return of(this.advertisements).pipe(
      map((advertisements: MockAdvertisement[]) => {
        advertisements.forEach((advertisement) => {
          if (advertisement.score >= filter) {
            filteredAdvertisements.push(advertisement)
          }
        })
        return filteredAdvertisements
      })
    )
  }

  getAdvertisementsFilteredByFacilities(
    filter: IFacilities
  ): Observable<MockAdvertisement[]> {
    const filteredAdvertisements: MockAdvertisement[] = []
    const filterActiveFacilities = Object.keys(_.pickBy(filter))
    return of(this.advertisements).pipe(
      map((advertisements: MockAdvertisement[]) => {
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

  findAdvertisementsHighestPrice(
    advertisements: Observable<MockAdvertisement[]>
  ): Observable<number> {
    return advertisements.pipe(map((advArr) => _.max(advArr.map((adv) => adv.price))))
  }

  findAdvertisementsLowestPrice(
    advertisements: Observable<MockAdvertisement[]>
  ): Observable<number> {
    return advertisements.pipe(map((advArr) => _.min(advArr.map((adv) => adv.price))))
  }
}
