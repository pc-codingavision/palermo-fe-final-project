import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement.ts'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AdvertisementResolver implements Resolve<MockAdvertisement[]> {
  constructor(private advertisementService: AdvertisementService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<MockAdvertisement[]> {
    return this.advertisementService.findAll().pipe(
      tap((_) => this.log('error')),
      catchError(this.handleError('resolve', []))
    )
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.')
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('error')
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
