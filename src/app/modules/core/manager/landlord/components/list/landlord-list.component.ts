import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute } from '@angular/router'
import { SearchService } from '@modules/core/manager/landlord/services/search.service'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable, Subscription } from 'rxjs'

export interface Elements {
  id: number
  fullName: string
  mail: string
  phoneNumber: string
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
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phoneNumber']
  expandedElement: Elements | null
  landlords$: Observable<Landlord[]>
  subscription: Subscription

  constructor(
    private landlordService: LandlordService,
    private searchLandlord: SearchService,
    private route: ActivatedRoute,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.landlords$ = this.route.snapshot.data.list
    this.landlords$ = this.searchLandlord.getSearchResult()
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.subscription = this.searchLandlord.search('', '', '').subscribe()
  }
}
