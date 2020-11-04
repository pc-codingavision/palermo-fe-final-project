import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { IAdvertisement } from 'src/app/shared/models/advertisement'

import { ADVERTISEMENTS_MOCK_DATA } from '../../../shared/models/mock-data/data'

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

  returnPriceFilteredAdvertisements(filter: number): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((filteredAdvertisements: IAdvertisement[]) => {
        return filteredAdvertisements.filter((x) => x.price <= filter)
      })
    )
  }

  findAdvertisementsHighestPrice(): Observable<number> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IAdvertisement[]) => {
        const advertisementArray = sourceArray
          .sort((x, y) => y.price - x.price)
          .slice(0, 1)
          .map((x) => x.price)
          .toString()
        return parseInt(advertisementArray, 0)
      })
    )
  }

  findAdvertisementsLowestPrice(): Observable<number> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IAdvertisement[]) => {
        const advertisementArray = sourceArray
          .sort((x, y) => x.price - y.price)
          .slice(0, 1)
          .map((x) => x.price)
          .toString()
        return parseInt(advertisementArray, 0)
      })
    )
  }
}
