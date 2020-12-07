import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable, of } from 'rxjs'
import { flatMap } from 'rxjs/internal/operators'
import { catchError, map, skipWhile, take, toArray } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  advertisementsUrl = 'api/advertisements'

  private handleError<T>(
    operation = 'operation',
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error)

      console.log(`AdvertisementService ${operation} failed ${error.message}`)

      return of(result as T)
    }
  }

  constructor(private http: HttpClient) {}

  findAll(): Observable<MockAdvertisement[]> {
    return this.http
      .get<MockAdvertisement[]>(this.advertisementsUrl)
      .pipe(
        map(this.mapAdvsArrayToAdvsArrayBuild()),
        catchError(this.handleError<MockAdvertisement[]>('findAll', []))
      )
  }

  findById(id: number): Observable<MockAdvertisement> {
    return this.http
      .get<MockAdvertisement>(`${this.advertisementsUrl}/${id}`)
      .pipe(
        map(this.mapAdvsToAdvsBuild()),
        catchError(this.handleError<MockAdvertisement>('findById'))
      )
  }

  private mapAdvsArrayToAdvsArrayBuild(): (advertisements) => any {
    return (advertisements) => advertisements.map(this.mapAdvsToAdvsBuild())
  }

  private mapAdvsToAdvsBuild(): (advertisements) => MockAdvertisement {
    return (advertisements) => MockAdvertisement.Build(advertisements)
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
}
