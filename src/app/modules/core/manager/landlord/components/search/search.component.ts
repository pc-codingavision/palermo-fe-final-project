import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { SearchService } from '../../services/search.service'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private searchService: SearchService) {}
  fullName = ''
  filteredFullName: Observable<string[]>

  ngOnInit(): void {
    this.onChange()
  }
  onChange(): void {
    this.searchService.search(this.fullName).subscribe()
  }
}
