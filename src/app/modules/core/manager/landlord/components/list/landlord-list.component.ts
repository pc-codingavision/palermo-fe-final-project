import { animate, state, style, transition, trigger } from '@angular/animations'
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { MatPaginator, PageEvent } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
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
export class LandlordListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phoneNumber']
  subscriptions: Subscription[] = []
  dataSource: MatTableDataSource<Landlord>
  landlords: Landlord[]
  expandedElement: Elements | null
  landlords$: Observable<Landlord[]>

  constructor(
    private landlordService: LandlordService,
    private searchLandlord: SearchService,
    private route: ActivatedRoute,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.landlords$ = this.route.snapshot.data.list
    this.getLandlords(5, 0)
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  ngOnDestroy(): void {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((subscription) => subscription.unsubscribe())
    }
  }

  getLandlords(length: number, start: number = 0): void {
    this.subscriptions.push(
      this.searchLandlord.getSearchResult(length, start).subscribe((landlords) => {
        this.dataSource = new MatTableDataSource<Landlord>(landlords)
        this.landlords = landlords
      })
    )
  }

  getLength(): Observable<number> {
    return this.landlordService.getLength()
  }

  paginatorInput(pageEvent: PageEvent): void {
    if (pageEvent.previousPageIndex !== pageEvent.pageIndex) {
      this.getLandlords(
        (pageEvent.pageIndex + 1) * pageEvent.pageSize,
        pageEvent.pageIndex * pageEvent.pageSize
      )
    } else {
      this.getLandlords(pageEvent.pageSize)
    }
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.subscriptions.push(this.searchLandlord.search('', '', '').subscribe())
  }
}
