import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { Landlord } from 'src/app/shared/models/landlord'

@Injectable({
  providedIn: 'root',
})
export class LandlordService {
  landlordsUrl = 'api/landlords'

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  getAll(): Observable<Landlord[]> {
    return this.http
      .get<Landlord[]>(this.landlordsUrl)
      .pipe(
        map(this.mapLandlordArrayToLandlordArrayBuild),
        catchError(this.handleError<Landlord[]>('getAll'))
      )
  }
  getLength(): Observable<any> {
    return this.getAll().pipe(
      map((landlords) => {
        console.log(landlords), landlords.length
      })
    )
  }

  getById(id: number): Observable<Landlord | null> {
    return this.http
      .get<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(
        map(this.mapLandlordToLandlordBuild),
        catchError(this.handleError<Landlord>('getById'))
      )
  }

  delete(id: number): Observable<Landlord> {
    return this.http
      .delete<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(catchError(this.handleError<Landlord>('delete')))
  }

  add(landlord: Landlord): Observable<Landlord> {
    return this.http
      .post<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('add')))
  }

  update(landlord: Landlord): Observable<Landlord | null> {
    return this.http
      .put<Landlord>(this.landlordsUrl, landlord)
      .pipe(catchError(this.handleError<Landlord>('update')))
  }

  toggleStatus(landlord: Landlord): Observable<boolean> {
    return this.http.put<string>(this.landlordsUrl, landlord).pipe(
      map((result: string) => (result === 'true' ? true : false)),
      catchError(this.handleError<Landlord>('update'))
    )
  }

  private mapLandlordArrayToLandlordArrayBuild = (landlords) =>
    landlords.map(this.mapLandlordToLandlordBuild)

  private mapLandlordToLandlordBuild = (landlord) => Landlord.Build(landlord)

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`)
      error = error.body ? error.body.error : error
      this.snackBar.openSnackBar(`${error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
