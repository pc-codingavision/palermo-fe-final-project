import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Landlord } from '@shared/models/landlord'
import { DialogService } from '@shared/services/dialog.service'

@Component({
  selector: 'cav-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss'],
})
export class ButtonContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() toggleStatus = new EventEmitter<string>()

  status: string

  // Deactivate
  titleDeactivate = 'Deactivate'
  subTitleDeactivate = 'Are you sure you want to deactivate this Landlord?'
  textDeactivate =
    'No data will be removed and it will be available as soon the landlord will be activated again.'

  // Activate
  titleActivate = 'Activate'
  subTitleActivate = 'Are you sure you want to activate this Landlord?'
  textActivate = ''

  // Delete
  titleDelete = 'Delete'
  subTitleDelete = 'Are you sure you want to delete this Landlord?'
  textDelete = `This will be removed all the landlord's associated data and it won't be possible to recover them!`

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  openDialog(operation: string): void {
    if (operation === 'deactivate') {
      this.dialogService.openDialog({
        title: this.titleDeactivate,
        subtitle: this.subTitleDeactivate,
        text: this.textDeactivate,
        returnValue: operation,
      })
    } else if (operation === 'activate') {
      this.dialogService.openDialog({
        title: this.titleActivate,
        subtitle: this.subTitleActivate,
        text: this.textActivate,
        returnValue: operation,
      })
    } else {
      this.dialogService.openDialog({
        title: this.titleDelete,
        subtitle: this.subTitleDelete,
        text: this.textDelete,
        returnValue: operation,
      })
    }

    this.dialogService
      .getDialogRef()
      .afterClosed()
      .subscribe((result) => this.toggleStatus.emit(result))
  }
}
