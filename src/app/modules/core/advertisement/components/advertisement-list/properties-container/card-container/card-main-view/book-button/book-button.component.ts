import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-book-button',
  template: ` <div class="button-row">
    <button mat-raised-button>Book</button>
  </div>`,
  styles: [
    `
      .button-row .mat-button-base {
        margin: 2px;
        background-color: green;
      }
    `,
  ],
})
export class BookButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
