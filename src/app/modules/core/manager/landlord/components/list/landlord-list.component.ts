import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, Input, OnInit } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'

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
  @Input() landlords: Landlord[]

  constructor(private landlordService: LandlordService) { }

  ngOnInit(): void { }

  remove(id: number): void {
    this.landlordService.delete(id).subscribe((landlords) => {
      this.landlords = landlords
    })
  }
}
