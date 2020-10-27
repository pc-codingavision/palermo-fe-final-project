import { Component, Input, OnInit } from '@angular/core'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS } from './../../../../../../../../shared/models/mock-data/mock-landlord'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  landlord = Landlord.Build(LANDLORDS[0])

  constructor() {}

  ngOnInit(): void {}
}
