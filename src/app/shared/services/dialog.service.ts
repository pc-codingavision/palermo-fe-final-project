import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { DialogComponent } from './../components/dialog/dialog.component'
import { IDialogData } from './../models/dialog-data'

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogRef: MatDialogRef<DialogComponent>
  constructor(private dialog: MatDialog) {}

  openDialog(dialogData: IDialogData): void {
    this.dialogRef = this.dialog.open(DialogComponent, { data: dialogData })
  }

  getDialogRef(): MatDialogRef<DialogComponent> {
    return this.dialogRef
  }
}
