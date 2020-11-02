import { Injectable } from '@angular/core'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  constructor() {}

  getAllLandlords(): Observable<Landlord[]> {
    const landlords: Landlord[] = []
    LANDLORDS_MOCK_DATA.forEach((land) => landlords.push(Landlord.Build(land)))
    return of(landlords)
  }

  findLandlordById(id: number): Observable<Landlord> {
    return of(Landlord.Build(LANDLORDS_MOCK_DATA.find((landlord) => landlord.id === id)))
  }

  deleteLandlord(landlord: number | Landlord): void {
    const id =
      typeof landlord === 'number' ? landlord - 1 : LANDLORDS_MOCK_DATA.indexOf(landlord)
    LANDLORDS_MOCK_DATA.splice(id, 1)
  }

  addLandlord(landlord: Landlord): void {
    LANDLORDS_MOCK_DATA.push(landlord)
  }

  updateLandlord(landlord: Landlord): Observable<Landlord> {
    let updatedLandlord: Landlord
    this.getAllLandlords().subscribe(
      (lands) => (updatedLandlord = lands.find((land) => land.id === landlord.id))
    )
    return of(updatedLandlord)
  }

  changeLandlordStatus(landlord: Landlord): Observable<Landlord> {
    landlord.status = !landlord.status
    return of(landlord)
  }
}
