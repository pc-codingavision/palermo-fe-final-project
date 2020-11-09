import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, of } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

export interface Elements {
  id: number
  fullname: string
  mail: string
  phone_number: string
}

@Component({
  selector: 'cav-landlord-list',
  templateUrl: './landlord-list.component.html',
  styleUrls: ['./landlord-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class LandlordListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phone_number']
  expandedElement: Elements | null
  landlords$: Observable<Landlord[]>
  filteredLandlords$: Observable<Landlord[]>
  constructor(private landlordService: LandlordService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.filteredLandlords$ = this.landlordService.getAll()
    this.landlords$ = this.filteredLandlords$
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.getAll()
  }

  searchByName(searchEvent: KeyboardEvent): void {
    of(searchEvent)
      .pipe(
        debounceTime(100),
        distinctUntilChanged(),
        map((e) => (e.target as HTMLInputElement).value)
      )
      .subscribe((searchTerm) => {
        this.filteredLandlords$ = this.landlords$.pipe(
          map((landlords) =>
            landlords.filter((landlord) =>
              landlord.fullName.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        )
      })
  }
}
