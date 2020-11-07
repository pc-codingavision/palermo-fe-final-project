import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'cav-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  @Input() selected: boolean
  @Output() favouriteEvent = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  public toggleSelected() {
    this.selected = !this.selected
    this.favouriteEvent.emit(this.selected)
  }
}
