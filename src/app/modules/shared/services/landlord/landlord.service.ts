import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Landlord } from '@shared/models/landlord'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  landlordsUrl = 'api/landlords'

  constructor(private http: HttpClient) {}

  private mapLandlordArrayToLandlordArrayBuild(): (a: Landlord[]) => Landlord[] {
    return (landlords) => landlords.map(this.mapLandlordToLandlordBuild())
  }

  private mapLandlordToLandlordBuild(): (a: Landlord) => Landlord {
    return (landlord) => Landlord.Build(landlord)
  }

  private handleError<T>(operation = 'operation', result?: T): (a: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`LandlordService: ${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }

  getAll(): Observable<Landlord[]> {
    return this.http
      .get<Landlord[]>(this.landlordsUrl)
      .pipe(map(this.mapLandlordArrayToLandlordArrayBuild()))
  }

  getById(id: number): Observable<Landlord> {
    if (!id) {
      throw new Error('You must provide an id!')
    }
    return this.http
      .get<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(map(this.mapLandlordToLandlordBuild()))
  }

  add(landlord: any): Observable<Landlord> {
    return this.http
      .post<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('add')))
  }

  update(landlord: Landlord): Observable<Landlord | null> {
    return this.http
      .put<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('update')))
  }

  delete(id: number): Observable<Landlord> {
    return this.http
      .delete<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(catchError(this.handleError<Landlord>('delete')))
  }

  toggleStatus(landlord: Landlord): Observable<any> {
    return this.http.patch<Landlord>(this.landlordsUrl, landlord).pipe(
      map((l) => {
        return (l.status = !l.status)
      }),
      catchError(this.handleError<Landlord>('update'))
    )
  }
}
