import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-card-main-view',
  templateUrl: './card-main-view.component.html',
  styleUrls: ['./card-main-view.component.scss'],
})
export class CardMainViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }
}
