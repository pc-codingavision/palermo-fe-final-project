import { Component, OnInit } from '@angular/core'

import { PropertiesService } from './../../../../services/properties.service'

@Component({
  selector: 'cav-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrls: ['./card-extra.component.scss'],
})
export class CardExtraComponent implements OnInit {
  constructor(private propertiesService: PropertiesService) {}

  ngOnInit(): void {}
}
