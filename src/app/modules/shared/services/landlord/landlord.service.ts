import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  private landlordsUrl = 'api/landlords'

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`LandlordService: ${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  private mapLandlordArrayToLandlordArrayBuild() {
    return (landlords) => landlords.map(this.mapLandlordToLandlordBuild())
  }

  private mapLandlordToLandlordBuild() {
    return (landlord) => Landlord.Build(landlord)
  }

  getAll(): Observable<Landlord[]> {
    return this.http
      .get<Landlord[]>(this.landlordsUrl)
      .pipe(
        map(this.mapLandlordArrayToLandlordArrayBuild()),
        catchError(this.handleError<Landlord[]>('getAll'))
      )
  }

  getById(id: number): Observable<Landlord | null> {
    return this.http
      .get<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(
        map(this.mapLandlordToLandlordBuild()),
        catchError(this.handleError<Landlord>('getById'))
      )
  }

  delete(id: number): Observable<Landlord> {
    return this.http
      .delete<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(catchError(this.handleError<Landlord>('deletedById')))
  }

  add(landlord: Landlord): Observable<Landlord> {
    return this.http
      .post<Landlord>(this.landlordsUrl, landlord)
      .pipe(
        map(this.mapLandlordToLandlordBuild()),
        catchError(this.handleError<Landlord>('add'))
      )
  }

  update(landlord: Landlord): Observable<Landlord | null> {
    return this.http
      .put<Landlord>(this.landlordsUrl, landlord)
      .pipe(
        map(this.mapLandlordToLandlordBuild()),
        catchError(this.handleError<Landlord>('update'))
      )
  }

  // toggleStatus(id: number): Observable<Landlord | null> {
  //   const index = this.getArrayIndexById(id)
  //   if (typeof index === 'number') {
  //     this.landlords[index].status = !this.landlords[index].status
  //     return of(this.landlords[index])
  //   }
  //   return of(null)
  // }

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
}
