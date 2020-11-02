import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-favourite',
  template: `<div class="flex-container">
    <button
      mat-icon-button
      color="warn"
      aria-label="Example icon button with a heart icon"
    >
      <mat-icon>favorite</mat-icon>
    </button>
  </div> `,
  styles: [
    `
      .flex-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class FavouriteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
