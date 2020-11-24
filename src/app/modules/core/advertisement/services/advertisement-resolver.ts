import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement.ts'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementResolver implements Resolve<MockAdvertisement[]> {
  constructor(private advertisementService: AdvertisementService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MockAdvertisement[]> {
    return this.advertisementService.findAll()
  }
}
