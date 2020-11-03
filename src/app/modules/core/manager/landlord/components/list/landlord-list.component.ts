import { animate, state, style, transition, trigger } from '@angular/animations'
import { Component, OnInit } from '@angular/core'
import { PhoneType, Role } from '@shared/enum/enums'
import { Observable } from 'rxjs'

import { Landlord } from './../../../../../../shared/models/landlord'
import { LandlordService } from './../../../../../shared/services/landlord/landlord.service'

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
  $landlords: Observable<Landlord[]>

  constructor(private landlordService: LandlordService) {}

  ngOnInit(): void {
    this.getAll()
    this.update()
  }

  update(): void {
    this.landlordService
      .update({
        id: 1,
        name: { firstName: 'Pino', surname: 'Cascio' },
        phone: [
          { id: 1, type: PhoneType.Mobile, digits: '3454545' },
          { id: 2, type: PhoneType.Home, digits: '09252525' },
        ],
        mail: 'piero-landlord@test.com',
        picture: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
        username: 'landlord1',
        password: 'password',
        status: true,
        dateOfBirth: new Date(1980, 10, 10),
        role: Role.Landlord,
        address: {
          line1: 'Via delle Magnolie',
          city: 'Messina',
          state: 'italia',
          postCode: '90100',
        },
        fullName: '',
      })
      .subscribe((land) => console.log(land))
    this.getAll()
  }

  getAll(): void {
    this.$landlords = this.landlordService.getAll()
  }

  remove(landlord: Landlord): void {
    this.landlordService.delete(landlord.id)
    this.getAll()
  }
}
