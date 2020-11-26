import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Subscription } from 'rxjs'

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
export class LandlordListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'fullName', 'mail', 'phone_number']
  expandedElement: Elements | null
  landlords: Landlord[]
  removeSubscription: Subscription
  constructor(private landlordService: LandlordService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.landlords = this.route.snapshot.data.list
  }

  remove(landlord: Landlord): void {
    this.removeSubscription = this.landlordService
      .delete(landlord.id)
      .subscribe((response) => {
        this.landlords = response
      })
  }

  ngOnDestroy(): void {
    this.removeSubscription.unsubscribe()
  }
}
