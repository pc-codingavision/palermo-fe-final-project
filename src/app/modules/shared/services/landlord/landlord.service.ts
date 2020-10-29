import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS } from './../../../../shared/models/mock-data/mock-landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  constructor() {}

  getAll(): Observable<Landlord[]> {
    return of(LANDLORDS)
  }
}
