import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, Subscription } from 'rxjs'

import { SearchService } from '../../services/search.service'

export interface Elements {
  id: number
  fullName: string
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
export class LandlordListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phone_number']
  expandedElement: Elements | null
  landlords$: Observable<Landlord[]>
  private subscription: Subscription

  constructor(
    private landlordService: LandlordService,
    private searchLandlord: SearchService
  ) {}

  ngOnInit(): void {
    this.getAll()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getAll(): void {
    this.landlords$ = this.searchLandlord.getSearchResult()
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.subscription = this.searchLandlord.search('', '', '').subscribe()
  }
}
