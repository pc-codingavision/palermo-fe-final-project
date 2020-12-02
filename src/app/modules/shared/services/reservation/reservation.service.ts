import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IReservation } from '@shared/models/reservation'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'api/reservations'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  getAll(): Observable<IReservation[]> {
    return this.http
      .get<IReservation[]>(this.apiUrl)
      .pipe(catchError(this.handleError<IReservation[]>('getAll')))
  }

  getById(id: number): Observable<IReservation> {
    return this.http
      .get<IReservation>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError<IReservation>('getById')))
  }

  update(reservation: IReservation): Observable<any> {
    return this.http
      .put<any>(this.apiUrl, reservation, this.httpOptions)
      .pipe(catchError(this.handleError<any>('update')))
  }

  add(reservation: IReservation): Observable<IReservation> {
    return this.http
      .post<IReservation>(this.apiUrl, reservation, this.httpOptions)
      .pipe(catchError(this.handleError<IReservation>('add')))
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`)

      this.snackBar.openSnackBar(`${error.body.error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
