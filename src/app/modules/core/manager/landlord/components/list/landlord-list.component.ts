import { animate, state, style, transition, trigger } from '@angular/animations'
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
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
export class LandlordListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phoneNumber']
  expandedElement: Elements | null
  landlords$: Observable<Landlord[]>
  private subscriptions: Subscription[] = []
  dataSource: MatTableDataSource<Landlord>

  constructor(
    private landlordService: LandlordService,
    private searchLandlord: SearchService,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.getAll()
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe())
    }
  }

  getAll(): void {
    this.subscriptions.push(
      this.searchLandlord
        .getSearchResult()
        .subscribe(
          (landlords) => (this.dataSource = new MatTableDataSource<Landlord>(landlords))
        )
    )
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.subscriptions.push(this.searchLandlord.search('', '', '').subscribe())
  }
}
