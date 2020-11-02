import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'cav-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScoreComponent implements OnInit {
  @Input('rating') private rating: number
  @Input('starCount') private starCount: number
  @Input('color') private color: string
  @Output() private ratingUpdated = new EventEmitter()

  private snackBarDuration = 2000
  private ratingArr = []

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index)
    }
  }
  onClick(rating: number) {
    console.log(rating)
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration,
    })
    this.ratingUpdated.emit(rating)
    return false
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star'
    } else {
      return 'star_border'
    }
  }
}
// }
export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn',
}
