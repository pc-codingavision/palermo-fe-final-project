import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() remove = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {}

  toggleStatus(operation: string): void {
    if (operation === 'deactivate' || operation === 'activate') {
      // chiamata al servizio
      this.landlord.status = !this.landlord.status
    } else if (operation === 'delete') {
      // chiamata al servizio
      this.remove.emit(this.landlord)
    }
  }
}
