import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-score',
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
})
export class ScoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
