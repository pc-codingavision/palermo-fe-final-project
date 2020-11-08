import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  status = false
  constructor() {}

  ngOnInit(): void {}
}
