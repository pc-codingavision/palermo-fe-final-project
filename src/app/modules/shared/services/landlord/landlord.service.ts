import { Injectable } from '@angular/core'
import { Landlord } from '@shared/models/landlord'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  landlords: Landlord[] = LANDLORDS_MOCK_DATA.map((landlord) => ({
    ...landlord,
  })) as Landlord[]

  constructor() { }

  private getArrayIndexById(id: number): number | null {
    const index = this.landlords.findIndex((landlord) => landlord.id === id)
    return index === -1 ? null : index
  }

  getAll(): Observable<Landlord[]> {
    return of(this.landlords.map((landlord) => Landlord.Build(landlord)))
  }

  getById(id: number): Observable<Landlord | null> {
    if (id !== null) {
      const landlordById = this.landlords.find((landlord) => landlord.id === id)
      if (landlordById !== undefined) {
        return of(landlordById)
      }
    }
    return of(null)
  }

  delete(id: number): Observable<Landlord[]> {
    if (this.getArrayIndexById(id) !== null) {
      this.landlords.splice(this.getArrayIndexById(id), 1)
    }
    return of(this.landlords)
  }

  add(landlord: Landlord): void {
    if (landlord !== null) {
      this.landlords.push(landlord)
    }
  }

  update(landlord: Landlord): Observable<Landlord | null> {
    if (landlord !== null) {
      const index = this.getArrayIndexById(landlord.id)
      if (typeof index === 'number') {
        return of((this.landlords[index] = landlord))
      }
    }
    return of(null)
  }

  toggleStatus(id: number): Observable<Landlord | null> {
    const index = this.getArrayIndexById(id)
    if (typeof index === 'number') {
      this.landlords[index].status = !this.landlords[index].status
      return of(this.landlords[index])
    }
    return of(null)
  }
}
