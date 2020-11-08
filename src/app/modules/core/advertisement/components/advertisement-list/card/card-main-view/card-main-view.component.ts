import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-card-main-view',
  templateUrl: './card-main-view.component.html',
  styleUrls: ['./card-main-view.component.scss'],
})
export class CardMainViewComponent implements OnInit {
  @Input() status = false
  @Output() clickButton = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }

  emitValue(): void {
    this.status = !this.status
    this.clickButton.emit(this.status)
  }
}
