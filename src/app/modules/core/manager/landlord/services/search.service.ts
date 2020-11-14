import { Injectable } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, ReplaySubject, Subject } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private filteredLandlords$: Subject<Landlord[]> = new ReplaySubject<Landlord[]>(1)
  constructor(private landlordService: LandlordService) {}

  getSearchResult(): Observable<Landlord[]> {
    return this.filteredLandlords$.asObservable()
  }

  search(fullName: string, email: string, digits: string): Observable<void> {
    return this.landlordService.getAll().pipe(
      tap((landlords: Landlord[]) => {
        landlords = landlords.filter((landlord) => {
          return (
            landlord.fullName.toLowerCase().includes(fullName.toLowerCase()) &&
            landlord.mail.toLowerCase().includes(email) &&
            landlord.phone
              .map((phone) => phone.digits)
              .toString()
              .includes(digits)
          )
        })
        this.filteredLandlords$.next(landlords)
      }),
      map(() => void 0)
    )
  }
}
