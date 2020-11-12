import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Landlord } from '@shared/models/landlord'
import { of } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() landlords: Landlord[]
  @Output() filterEvent = new EventEmitter<Landlord[]>()

  filteredId = new FormControl('')
  filteredFullName = new FormControl('')
  filteredEmail = new FormControl('')
  filteredPhone = new FormControl('')

  constructor() {}

  ngOnInit(): void {}

  searchFilter(searchEvent: KeyboardEvent): void {
    of(searchEvent)
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((e) => (e.target as HTMLInputElement).value)
      )
      .subscribe(() => {
        const filtered = this.landlords.filter((landlord) => {
          return (
            landlord.fullName
              .toLowerCase()
              .includes(this.filteredFullName.value.toLowerCase()) &&
            landlord.id.toString().includes(this.filteredId.value) &&
            landlord.mail
              .toLowerCase()
              .includes(this.filteredEmail.value.toLowerCase()) &&
            landlord.phone
              .map((phone) => phone.digits)
              .toString()
              .includes(this.filteredPhone.value)
          )
        })
        this.filterEvent.emit(filtered)
      })
  }
}
