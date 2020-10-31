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

  /* findById(id: number): Observable<Landlord> {
    return of(
      LANDLORDS.find((landlord) => {
        landlord.id === id
      })
    )
  }*/

  deleteLandlord(landlord: number | Landlord): void {
    const id = typeof landlord === 'number' ? landlord - 1 : LANDLORDS.indexOf(landlord)
    LANDLORDS.splice(id, 1)
  }
}
