import { Injectable } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private filteredLandlords$: Subject<Landlord[]> = new BehaviorSubject<Landlord[]>(
    null
    // this.landlordService.landlords
  )

  constructor(private landlordService: LandlordService) {}

  getSearchResult(
    length = this.landlordService.landlords.length,
    start: number = 0
  ): Observable<Landlord[]> {
    return this.filteredLandlords$
      .asObservable()
      .pipe(map((landlords) => landlords.slice(start, length)))
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

  phoneSearch(landlord: Landlord, digits: string): boolean {
    return landlord.phone
      .map((x) => x.digits)
      .toString()
      .includes(digits)
  }

  mailSearch(landlord: Landlord, email: string): boolean {
    return landlord.mail.toLowerCase().includes(email.trim().toLowerCase())
  }

  fullNameSearch(landlord: Landlord, fullName: string): boolean {
    return landlord.fullName.toLowerCase().includes(fullName.trim().toLowerCase())
  }
}
