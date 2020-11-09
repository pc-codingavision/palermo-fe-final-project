import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  @Input() selected: boolean
  @Output() favouriteEvent = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  public toggleSelected(): void {
    this.selected = !this.selected
    this.favouriteEvent.emit(this.selected)
  }
}
