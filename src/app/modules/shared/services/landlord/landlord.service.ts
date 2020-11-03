import { Injectable } from '@angular/core'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  constructor() {}

  getArrayIndexById(id: number): number {
    const index = LANDLORDS_MOCK_DATA.findIndex((landlord) => landlord.id === id)
    return index === -1 ? null : index
  }

  getAll(): Observable<Landlord[]> {
    return of(LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord)))
  }

  getById(id: number): Observable<Landlord> {
    return of(Landlord.Build(LANDLORDS_MOCK_DATA.find((landlord) => landlord.id === id)))
  }

  delete(id: number): void {
    if (this.getArrayIndexById(id) !== null) {
      LANDLORDS_MOCK_DATA.splice(this.getArrayIndexById(id), 1)
    }
  }

  add(landlord: Landlord): void {
    LANDLORDS_MOCK_DATA.push(landlord)
  }

  update(landlord: Landlord): Observable<Landlord> {
    const index = this.getArrayIndexById(landlord.id)
    return of((LANDLORDS_MOCK_DATA[index] = landlord))
  }

  toggleStatus(id: number): Observable<Landlord> {
    const index = this.getArrayIndexById(id)
    LANDLORDS_MOCK_DATA[index].status = !LANDLORDS_MOCK_DATA[index].status
    return of(LANDLORDS_MOCK_DATA[index])
  }
}
