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

  returnMaxPriceProperty(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((maxPriceProperty: IAdvertisement[]) => {
        maxPriceProperty.sort((x, y) => y.price - x.price)
        return maxPriceProperty.slice(0, 1)
      })
    )
  }

  returnMinPriceProperty(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS_MOCK_DATA).pipe(
      map((minPriceProperty: IAdvertisement[]) => {
        minPriceProperty.sort((x, y) => x.price - y.price)
        return minPriceProperty.slice(0, 1)
      })
    )
  }
}
