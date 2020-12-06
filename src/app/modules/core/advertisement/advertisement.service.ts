import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import {
  MOCKADVERTISEMENTS_MOCK_DATA,
  MockAdvertisement,
} from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService {
  advertisements = MOCKADVERTISEMENTS_MOCK_DATA.map((advertisement) =>
    MockAdvertisement.Build(advertisement)
  )
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

  // tslint:disable-next-line:typedef
  private mapAdvsArrayToAdvsArrayBuild() {
    return (advertisements) => advertisements.map(this.mapAdvsToAdvsBuild())
  }

  // tslint:disable-next-line:typedef
  private mapAdvsToAdvsBuild() {
    return (advertisements) => MockAdvertisement.Build(advertisements)
  }

  getLatestAdv(start: number = 0, end: number = 2): Observable<MockAdvertisement[]> {
    return of(this.advertisements.slice(start, end))
    // return this.http.get<MockAdvertisement[]>(this.advertisementsUrl).pipe(
    //   map(this.mapAdvsArrayToAdvsArrayBuild()),
    //   map((advs) => advs.slice(start, end))
    // )
    // return this.findAll().pipe(
    //   flatMap((val) => of(...val)),
    //   skipWhile((val, index) => {
    //     if (index <= 1) {
    //     }
    //   })
    // )
    // return this.findAll().pipe(map((advs) => advs.slice(start, end)))
  }
}
