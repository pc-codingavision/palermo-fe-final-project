import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
})
export class ButtonContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() changeStatus = new EventEmitter<string>()

  status: string

  // Deactivate
  h1Deactivate = 'Deactivate'
  h2Deactivate = 'Are you sure you want to deactivate this Landlord?'
  pDeactivate =
    'No data will be removed and it will be available as soon the landlord will be activated again.'

  // Activate
  h1Activate = 'Activate'
  h2Activate = 'Are you sure you want to activate this Landlord?'
  pActivate = ''

  // Delete
  h1Delete = 'Delete'
  h2Delete = 'Are you sure you want to delete this Landlord?'
  pDelete = `This will be removed all the landlord's associated data and it won't be possible to recover them!`

  constructor() {}

  ngOnInit(): void {}

  /*openDialog(operation: string): void {
    if (operation === 'deactivate') {
      this.openDialogService.openDialog({
        h1: this.h1Deactivate,
        h2: this.h2Deactivate,
        p: this.pDeactivate,
        returnValue: operation,
      })
    } else if (operation === 'activate') {
      this.openDialogService.openDialog({
        h1: this.h1Activate,
        h2: this.h2Activate,
        p: this.pActivate,
        returnValue: operation,
      })
    } else {
      this.openDialogService.openDialog({
        h1: this.h1Delete,
        h2: this.h2Delete,
        p: this.pDelete,
        returnValue: operation,
      })
    }

    this.openDialogService
      .getDialogRef()
      .afterClosed()
      .subscribe((result) => this.changeStatus.emit(result))
  }*/
}
