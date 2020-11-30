import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  private landlordsUrl = 'api/landlords'

  landlords: Landlord[] = LANDLORDS_MOCK_DATA.map((landlord) => ({
    ...landlord,
  })) as Landlord[]

  constructor(private http: HttpClient) {}

  private getArrayIndexById(id: number): number | null {
    const index = this.landlords.findIndex((landlord) => landlord.id === id)
    return index === -1 ? null : index
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`LandlordService: ${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  // getAll(): Observable<Landlord[]> {
  //   return of(this.landlords.map((landlord) => Landlord.Build(landlord)))
  // }
  getAll(): Observable<Landlord[]> {
    return this.http.get<Landlord[]>(this.landlordsUrl)
    // .pipe(catchError(this.handleError<Landlord[]>('getAll')))
  }

  // getById(id: number): Observable<Landlord | null> {
  //   if (id !== null) {
  //     const landlordById = this.landlords.find((landlord) => landlord.id === id)
  //     if (landlordById !== undefined) {
  //       return of(Landlord.Build(landlordById))
  //     }
  //   }
  //   return of(null)
  // }
  getById(id: number): Observable<Landlord | null> {
    return this.http
      .get<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(catchError(this.handleError<Landlord>('getById')))
  }

  // delete(id: number): void {
  //   if (this.getArrayIndexById(id) !== null) {
  //     this.landlords.splice(this.getArrayIndexById(id), 1)
  //   }
  // }
  delete(id: number): Observable<Landlord> {
    return this.http
      .delete<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(catchError(this.handleError<Landlord>('deletedById')))
  }

  // add(landlord: Landlord): void {
  //   if (landlord !== null) {
  //     landlord.id = this.genId()
  //     this.landlords.push(landlord)
  //   }
  // }
  add(landlord: Landlord): Observable<Landlord> {
    return this.http
      .post<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('add')))
  }

  // update(landlord: Landlord): Observable<Landlord | null> {
  //   if (landlord !== null) {
  //     const index = this.getArrayIndexById(landlord.id)
  //     if (typeof index === 'number') {
  //       return of((this.landlords[index] = landlord))
  //     }
  //   }
  //   return of(null)
  // }

  update(landlord: Landlord): Observable<Landlord | null> {
    console.log(landlord)
    const updatedLandlord$ = this.http
      .put<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('update')))

    updatedLandlord$.subscribe((lan) => console.log(lan))

    this.getAll().subscribe((landlords) => console.log(landlords))
    return updatedLandlord$
  }

  toggleStatus(id: number): Observable<Landlord | null> {
    const index = this.getArrayIndexById(id)
    if (typeof index === 'number') {
      this.landlords[index].status = !this.landlords[index].status
      return of(this.landlords[index])
    }
    return of(null)
  }

  // genId(): number {
  //   return this.landlords.length
  //     ? Math.max(...this.landlords.map((landlord) => landlord.id)) + 1
  //     : 1
  // }
}
