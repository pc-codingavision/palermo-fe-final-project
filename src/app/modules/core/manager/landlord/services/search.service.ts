import { Injectable } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, ReplaySubject, Subject } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private landlordService: LandlordService) {}
  private filteredLandlords$: Subject<Landlord[]> = new ReplaySubject<Landlord[]>(1)

  getSearchResult(): Observable<Landlord[]> {
    return this.filteredLandlords$.asObservable()
  }

  search(fullName: string, email: string, digits: string): Observable<void> {
    return this.landlordService.getAll().pipe(
      tap((landlords: Landlord[]) => {
        landlords = landlords.filter((landlord) => {
          return (
            this.fullNameSearch(landlord, fullName) &&
            this.mailSearch(landlord, email) &&
            this.phoneSearch(landlord, digits)
          )
        })
        this.filteredLandlords$.next(landlords)
      }),
      map(() => void 0)
    )
  }

  private phoneSearch(landlord: Landlord, digits: string): any {
    return landlord.phone
      .map((x) => x.digits)
      .toString()
      .includes(digits)
  }

  private mailSearch(landlord: Landlord, email: string): any {
    return landlord.mail.toLowerCase().includes(email.trim().toLowerCase())
  }

  private fullNameSearch(landlord: Landlord, fullName: string): any {
    return landlord.fullName.toLowerCase().includes(fullName.trim().toLowerCase())
  }
}
