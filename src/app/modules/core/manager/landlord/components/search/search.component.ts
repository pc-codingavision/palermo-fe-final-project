import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'

import { Landlord } from './../../../../../../shared/models/landlord'
import { LANDLORDS } from './../../../../../../shared/models/mock-data/mock-landlord'

@Component({
  selector: 'cav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  landlords: Landlord[] = []
  formControl = new FormControl()
  filteredFullName: Observable<string[]>
  filteredEmail: Observable<string[]>
  filteredPhone: Observable<string[]>
  constructor() {}

  ngOnInit(): void {
    LANDLORDS.forEach((v) => {
      this.landlords.push(Landlord.Build(v))
    })

    // this.filteredFullName = this.formControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filterFullName(value))
    // )
    // this.filteredEmail = this.formControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filterEmail(value))
    // )
    // this.filteredPhone = this.formControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filterPhone(value))
    // )
  }

  private _filterFullName(value: string): string[] {
    const filterValue = this._normalizeValue(value)
    const landlordsUsername = this.landlords.map((landlord) => landlord.fullName)
    return landlordsUsername.filter((landlord) =>
      this._normalizeValue(landlord).includes(filterValue)
    )
  }

  private _filterEmail(value: string): string[] {
    const filterValue = this._normalizeValue(value)
    const landlordsEmail = this.landlords.map((landlord) => landlord.mail)
    return landlordsEmail.filter((landlord) =>
      this._normalizeValue(landlord).includes(filterValue)
    )
  }

  private _filterPhone(value: string): string[] {
    const filterValue = this._normalizeValue(value)
    const landlordsPhone = this.landlords.map((landlord) => landlord.phone[0].digits)
    return landlordsPhone.filter((landlord) =>
      this._normalizeValue(landlord).includes(filterValue)
    )
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '')
  }
}
