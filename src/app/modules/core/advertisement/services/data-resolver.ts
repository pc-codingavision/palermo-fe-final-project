import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { Observable } from 'rxjs'

import { MockAdvertisement } from '../mock-advertisement/mock-advertisement'

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<MockAdvertisement[]> {
  constructor(private advertisementService: AdvertisementService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MockAdvertisement[]> {
    return this.advertisementService.findAll()
  }
}
