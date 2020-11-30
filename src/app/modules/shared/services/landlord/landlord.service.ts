import { Injectable } from '@angular/core'
import { concat, Observable, of } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'
import { HttpClient } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  // landlords: Landlord[] = LANDLORDS_MOCK_DATA.map((landlord) => ({
  //   ...landlord,
  // })) as Landlord[]

  LANDLORD_ENDPOINT = 'api/landlords'

  constructor(private httpClient: HttpClient) {}

  // private getArrayIndexById(id: number): number | null {
  //   const index = this.landlords.findIndex((landlord) => landlord.id === id)
  //   return index === -1 ? null : index
  // }

  getAll(): Observable<Landlord[]> {
    return this.httpClient
      .get<Landlord[]>(this.LANDLORD_ENDPOINT)
      .pipe(map(this.mapLandlordArrayToLandlordArrayBuild()))
  }

  getById(id: number): Observable<Landlord> {
    if (!id) {
      throw new Error('You must provide an id!')
    }
    return this.httpClient
      .get<Landlord>(`${this.LANDLORD_ENDPOINT}/${id}`)
      .pipe(map(this.mapLandlordToLandlordBuild()))
  }

  delete(id: number): Observable<Landlord> {
    return this.httpClient.delete<Landlord>(`${this.LANDLORD_ENDPOINT}/${id}`)
  }

  add(landlord: Landlord): void {
    this.httpClient.post(`${this.LANDLORD_ENDPOINT}`, landlord)
  }

  update(landlord: Landlord): Observable<Landlord> {
    debugger
    return this.httpClient.put<Landlord>(`${this.LANDLORD_ENDPOINT}`, landlord).pipe(
      tap((_) => console.log(`updated landlord: ${_}`)),
      map(this.mapLandlordToLandlordBuild()),
      catchError(this.handleError)
    )
  }

  toggleStatus(id: number): Observable<Landlord | null> {
    // todo: implement toggle status logic
    throw new Error('implement toggle status logic')
    // const index = this.getArrayIndexById(id)
    // if (typeof index === 'number') {
    //   this.landlords[index].status = !this.landlords[index].status
    //   return of(this.landlords[index])
    // }
    // return of(null)
  }

  private mapLandlordArrayToLandlordArrayBuild() {
    return (landlords) => landlords.map(this.mapLandlordToLandlordBuild())
  }

  private mapLandlordToLandlordBuild() {
    return (landlord) => Landlord.Build(landlord)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`LandlordService: ${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }
}
