import { Injectable } from '@angular/core'
import {
  IMockAdvertisement,
  MOCKADVERTISEMENTS_MOCK_DATA,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import * as _ from 'lodash'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  returnAdvertisementScore(): Observable<number[]> {
    const resultArray: number[] = []
    return of(MOCKADVERTISEMENTS_MOCK_DATA).pipe(
      map((sourceArray: IMockAdvertisement[]) => {
        sourceArray.forEach((advertisement) => {
          const score = _.mean(advertisement.reviews.map((rev) => rev.vote))
          resultArray.push(_.round(score))
        })
        return resultArray
      })
    )
  }
}
