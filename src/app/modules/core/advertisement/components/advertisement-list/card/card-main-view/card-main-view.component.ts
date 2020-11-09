import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-card-main-view',
  templateUrl: './card-main-view.component.html',
  styleUrls: ['./card-main-view.component.scss'],
})
export class CardMainViewComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  @Output() btnClick = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {}

  emitStatus(): void {
    this.btnClick.emit()
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
