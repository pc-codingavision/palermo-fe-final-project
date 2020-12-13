import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() remove = new EventEmitter<Landlord>()
  @Output() update = new EventEmitter<Landlord>()

  constructor() {}

  ngOnInit(): void {}

  toggleStatus(operation: string): void {
    if (operation === 'deactivate' || operation === 'activate') {
      this.update.emit(this.landlord)
      this.landlord.status = !this.landlord.status
      console.log(this.landlord.status)
    } else if (operation === 'delete') {
      this.remove.emit(this.landlord)
    }
  }
}
