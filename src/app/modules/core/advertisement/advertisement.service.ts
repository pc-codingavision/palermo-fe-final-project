import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IAdvertisement } from 'src/app/shared/models/advertisement'

import { ADVERTISEMENTS } from './../../../shared/models/mock-data/mock-advertisement'

@Injectable()
export class AdvertisementService {
  constructor() {}

  findAll(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS)
  }

  findById(id: number): Observable<IAdvertisement> {
    return of(ADVERTISEMENTS.find((advert) => (advert.id = id)))
  }
}
