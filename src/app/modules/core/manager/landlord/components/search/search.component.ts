import { Component, OnInit } from '@angular/core'
import { SearchService } from '@modules/core/manager/landlord/services/search.service'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  landlords$: Observable<Landlord[]>
  phoneMatch$: Observable<string[]>
  fullName = ''
  email = ''
  phone = ''

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.landlords$ = this.searchService.getSearchResult()

    this.landlords$
      .pipe(
        map((landlords) => landlords.flatMap((l) => l.phone)),
        map((phones) => phones.map((p) => p.digits))
      )
      .subscribe(
        (phones) =>
          (this.phoneMatch$ = of(phones.filter((phone) => phone.includes(this.phone))))
      )
    this.onChange()
  }
  onChange(): void {
    this.searchService.search(this.fullName, this.email, this.phone).subscribe()
  }

  isCharacterAllowed(event: KeyboardEvent): boolean {
    return event.key.match(/[^0-9]/g) === null
  }
}
