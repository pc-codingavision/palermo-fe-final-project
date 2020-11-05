import { Component, Input, OnInit } from '@angular/core'

import { Advertisement, } from './../../../../../../../shared/models/advertisement'

@Component({
  selector: 'cav-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  @Input() advertisement: Advertisement

  constructor(

  ) {}

  ngOnInit(): void {

  }


  }
}
