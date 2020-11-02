import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS_MOCK_DATA } from './../../../../shared/models/mock-data/data'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  constructor() {}

  getAll(): Observable<Landlord[]> {
    return of(LANDLORDS_MOCK_DATA)
  }

  /* findById(id: number): Observable<Landlord> {
    return of(
      LANDLORDS.find((landlord) => {
        landlord.id === id
      })
    )
  }*/

  deleteLandlord(landlord: number | Landlord): void {
    const id =
      typeof landlord === 'number' ? landlord - 1 : LANDLORDS_MOCK_DATA.indexOf(landlord)
    LANDLORDS_MOCK_DATA.splice(id, 1)
  }
}
