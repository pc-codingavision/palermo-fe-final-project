import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS_MOCK_DATA } from './../../../../../../../../shared/models/mock-data/data'

@Component({
  selector: 'cav-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.scss'],
})
export class EditContainerComponent implements OnInit {
  landlord: Landlord

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getLandlord()
  }

  getLandlord(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.landlord = Landlord.Build(LANDLORDS_MOCK_DATA.find((land) => land.id === id))
  }
}
