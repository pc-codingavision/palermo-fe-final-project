import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { LANDLORDS } from 'src/app/shared/models/mock-data/mock-landlord'

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
export class LandlordListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phone_number']
  expandedElement: Elements | null
  landlords: Landlord[]
  $landlords: Subscription

  constructor(private landlordService: LandlordService) {}

  getLandlords(): void {
    this.landlordService
      .getAllLandlords()
      .subscribe((landlords) => (this.landlords = landlords))
  }

  ngOnInit(): void {
    this.getLandlords()
  }

  ngOnDestroy(): void {
    this.$landlords.unsubscribe()
  }

  remove(landlord: Landlord): void {
    this.landlordService.deleteLandlord(landlord)
    console.log(LANDLORDS)
  }
}
