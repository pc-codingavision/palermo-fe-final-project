import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { LANDLORDS_MOCK_DATA } from 'src/app/shared/models/mock-data/data'

import { Landlord } from './../../../../../../shared/models/landlord'
import { LandlordService } from './../../../../../shared/services/landlord/landlord.service'

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
  expandedElement: Elements | null
  landlords: Landlord[]

  constructor(private landlordService: LandlordService) {}

  getLandlords(): Observable<Landlord[]> {
    return this.landlordService.getAll()
  }

  ngOnInit(): void {}

  remove(landlord: Landlord): void {
    this.landlordService.deleteLandlord(landlord)
    console.log(LANDLORDS_MOCK_DATA)
  }
}
