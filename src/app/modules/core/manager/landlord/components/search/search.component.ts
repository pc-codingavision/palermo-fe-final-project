import { Component, OnInit } from '@angular/core'

import { SearchService } from '../../services/search.service'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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
