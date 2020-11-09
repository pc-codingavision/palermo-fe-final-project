import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { Observable } from 'rxjs'

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

  constructor(private landlordService: LandlordService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.landlords$ = this.landlordService.getAll()
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.getAll()
  }
}
