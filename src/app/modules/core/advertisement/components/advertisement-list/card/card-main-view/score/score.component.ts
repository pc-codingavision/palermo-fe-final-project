import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-score',
<<<<<<< HEAD
  template: `<div>
    <button mat-icon-button class="hidden">
      <mat-icon>star</mat-icon>
    </button>
  </div> `,
  styles: [
    `
      .hidden {
        border: none;
        outline: none;
        cursor: pointer;
      }
    `,
  ],
=======
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
>>>>>>> locale
})
export class ScoreComponent implements OnInit {
  @Input() rating = 2
  @Input() itemId: number
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>()

  inputName: string
  constructor() {}

  ngOnInit(): void {
    this.inputName = this.itemId + '_rating'
  }
  onClick(rating: number): void {}
}
