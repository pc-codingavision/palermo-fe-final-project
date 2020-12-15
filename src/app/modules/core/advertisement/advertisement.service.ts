import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, of } from 'rxjs'
import { flatMap } from 'rxjs/internal/operators'
import { catchError, map, skipWhile, take, toArray } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  advertisementsUrl = 'api/advertisements'

  constructor(private http: HttpClient, private snackBar: SnackBarService) {}

  findAll(): Observable<MockAdvertisement[]> {
    return this.http
      .get<MockAdvertisement[]>(this.advertisementsUrl)
      .pipe(
        map(this.mapAdvsArrayToAdvsArrayBuild),
        catchError(this.handleError<MockAdvertisement[]>('findAll', []))
      )
  }

  findById(id: number): Observable<MockAdvertisement> {
    return this.http
      .get<MockAdvertisement>(`${this.advertisementsUrl}/${id}`)
      .pipe(
        map(this.mapAdvToAdvBuild),
        catchError(this.handleError<MockAdvertisement>('findById id=${id}'))
      )
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<MockAdvertisement[]> {
    return this.findAll().pipe(
      flatMap((val) => of(...val)),
      skipWhile((val, index) => {
        if (index < start) {
          return true
        }
      }),
      take(end),
      toArray()
    )
  }

  private mapAdvsArrayToAdvsArrayBuild = (advertisements) =>
    advertisements.map(this.mapAdvToAdvBuild)

  private mapAdvToAdvBuild = (advertisement) => MockAdvertisement.Build(advertisement)

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${JSON.stringify(error)}`)

      this.snackBar.openSnackBar(`${error?.body?.error}`, 'close', 10000)

      return of(result as T)
    }
  }
}
