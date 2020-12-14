import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Landlord } from '@shared/models/landlord'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

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

  getLength(): Observable<number> {
    return this.getAll().pipe(map((landlords) => landlords.length))
  }

  getById(id: number): Observable<Landlord | null> {
    return this.http
      .get<Landlord>(`${this.landlordsUrl}/${id}`)
      .pipe(
        map(this.mapLandlordToLandlordBuild),
        catchError(this.handleError<Landlord>('getById'))
      )
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

  toggleStatus(landlord: Landlord): Observable<boolean> {
    return this.http.patch<string>(this.landlordsUrl, landlord).pipe(
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
      this.snackBar.openSnackBar(`${error.body.error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
