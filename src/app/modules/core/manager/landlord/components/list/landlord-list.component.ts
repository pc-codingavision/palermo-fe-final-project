import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

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

  constructor(private landlordService: LandlordService) {}

  getLandlords(): Observable<Landlord[]> {
    return this.landlordService.getAll()
  }

  ngOnInit(): void {}

  // remove(event: any): void {
  //   const index = this.landlords.indexOf(event)
  //   LANDLORDS.splice(index, 1)
  // }
}
