import { Injectable } from '@angular/core'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  constructor() {}

  getAll(): Observable<Landlord[]> {
    return of(LANDLORDS_MOCK_DATA.map((landlord) => Landlord.Build(landlord)))
  }

  getById(id: number): Observable<Landlord> {
    return of(Landlord.Build(LANDLORDS_MOCK_DATA.find((landlord) => landlord.id === id)))
  }

  delete(landlord: number | Landlord): void {
    const id =
      typeof landlord === 'number' ? landlord - 1 : LANDLORDS_MOCK_DATA.indexOf(landlord)
    LANDLORDS_MOCK_DATA.splice(id, 1)
  }

  add(landlord: Landlord): void {
    LANDLORDS_MOCK_DATA.push(landlord)
  }

  update(landlord: Landlord): Observable<Landlord> {
    let updatedLandlord: Landlord
    this.getAll().subscribe(
      (lands) => (updatedLandlord = lands.find((land) => land.id === landlord.id))
    )
    return of(updatedLandlord)
  }

  toggleStatus(landlord: Landlord): Observable<Landlord> {
    landlord.status = !landlord.status
    return of(landlord)
  }
}
