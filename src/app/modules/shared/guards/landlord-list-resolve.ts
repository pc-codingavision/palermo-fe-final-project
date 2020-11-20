import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class LandlordListResolver implements Resolve<Observable<Landlord[]>> {
  constructor(public landlordService: LandlordService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Landlord[]> {
    return this.landlordService.getAll()
  }
}
