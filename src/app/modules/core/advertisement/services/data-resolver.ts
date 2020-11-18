import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'

import { MOCKADVERTISEMENTS_MOCK_DATA } from './../mock-advertisement/mock-advertisement'
import { MockAdvertisement } from '../mock-advertisement/mock-advertisement'

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<MockAdvertisement[]> {
  advertisements = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
    MockAdvertisement.Build(advertisement)
  )
  constructor() {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MockAdvertisement[]> {
    return of(this.advertisements)
  }
}
