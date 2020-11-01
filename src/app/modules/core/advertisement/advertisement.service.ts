import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { IAdvertisement } from 'src/app/shared/models/advertisement'

import { ADVERTISEMENTS } from './../../../shared/models/mock-data/mock-advertisement'
import { LANDLORDS } from './../../../shared/models/mock-data/mock-landlord'
import { PROPERTY } from './../../../shared/models/mock-data/mock-property'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  constructor() {}

  /*
  EXPLANATION OF THE METHOD getAll():
  In ADV we have two foreign key in order to link ADV to LAND and PROP.
  So we have to join this 3 arrays into a generic array.
  So, for first, we have to join ADV and PROP where ADV.propId and PROP.id
  are equal. Than we have to do the same thing with the resulted array and LAND
   */

  findAll(): Observable<IAdvertisement[]> {
    return of(ADVERTISEMENTS)
  }

  findById(id: number): Observable<IAdvertisement> {
    return of(ADVERTISEMENTS.find((advert) => (advert.id = id)))
  }

  getAll(): Observable<any[]> {
    return of(
      ADVERTISEMENTS.map((adv, i) => {
        if (adv.id === PROPERTY[i].id) {
          return Object.assign({}, adv, PROPERTY[i])
        }
      }).map((adv, i) => {
        if (adv.id === LANDLORDS[i].id) {
          return Object.assign({}, adv, LANDLORDS[i])
        }
      })
    )
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<any[]> {
    return of(
      ADVERTISEMENTS.map((adv, i) => {
        if (adv.id === PROPERTY[i].id) {
          return Object.assign({}, adv, PROPERTY[i])
        }
      }).slice(start, end)
    )
  }
}
