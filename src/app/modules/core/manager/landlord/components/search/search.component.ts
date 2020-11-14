import { Component, OnInit } from '@angular/core'
import { Landlord } from '@shared/models/landlord'
import { Observable } from 'rxjs'

import { SearchService } from '../../services/search.service'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  landlords$: Observable<Landlord[]> = this.searchService.getSearchResult()
  constructor(private searchService: SearchService) {}
  fullName = ''
  email = ''
  phone = ''

  ngOnInit(): void {
    this.onChange()
  }
  onChange(): void {
    this.searchService.search(this.fullName, this.email, this.phone).subscribe()
  }
}
