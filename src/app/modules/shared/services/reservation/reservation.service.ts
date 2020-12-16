import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IReservation } from '@shared/models/reservation'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, Subject, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // tslint:disable-next-line:variable-name
  private _reservations$: Subject<IReservation[]> = new Subject<IReservation[]>()
  private apiUrl = 'api/reservations'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  get reservations$(): Observable<IReservation[]> {
    return this._reservations$.asObservable()
  }

  getAll(): void {
    this.http
      .get<IReservation[]>(this.apiUrl)
      .pipe(catchError(this.handleError<IReservation[]>('getAll')))
      .subscribe((result) => this._reservations$.next(result))
  }

  getById(id: number): Observable<IReservation> {
    return this.http
      .get<IReservation>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError<IReservation>('getById')))
  }

  update(reservation: IReservation): Observable<any> {
    return this.http.put<any>(this.apiUrl, reservation, this.httpOptions).pipe(
      catchError(this.handleError<any>('update')),
      tap(() => this.getAll())
    )
  }

  add(reservation: IReservation): Observable<IReservation> {
    return this.http.post<IReservation>(this.apiUrl, reservation, this.httpOptions).pipe(
      catchError(this.handleError<IReservation>('add')),
      tap(() => this.getAll())
    )
  }

  delete(reservation: IReservation | number): Observable<IReservation> {
    const id = typeof reservation === 'number' ? reservation : reservation.id

    return this.http.delete<IReservation>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError<IReservation>('delete')),
      tap(() => this.getAll())
    )
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`)

      error = error.body ? error.body.error : error
      this.snackBar.openSnackBar(`${error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
