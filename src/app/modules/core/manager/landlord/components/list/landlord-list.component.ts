import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Landlord } from '@shared/models/landlord'
import { LANDLORDS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable, of } from 'rxjs'

export interface Elements {
  id: any
  fullname: any
  mail: any
  phone_number: any
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
  expandedElement: Landlord | null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.landlordId) {
        // Chiamata al servizio per recuperare il landlord by id
        this.expandedElement = LANDLORDS_MOCK_DATA[0] // service.getById(params.landlordId)
      }
    })
  }

  getLandlords(): Observable<Landlord[]> {
    return of(LANDLORDS_MOCK_DATA)
  }

  remove(landlord: Landlord): void {
    // Chiamata al servizio
  }
}
