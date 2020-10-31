import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { IDialogData } from './../../models/dialog-data'
import { DialogComponent } from '../../components/dialog/dialog.component'

@Injectable({
  providedIn: 'root',
})
export class OpenDialogService {
  dialogRef: MatDialogRef<DialogComponent>
  constructor(private dialog: MatDialog) {}

  openDialog(dialogData: IDialogData): void {
    this.dialogRef = this.dialog.open(DialogComponent, { data: dialogData })
  }

  getDialogRef(): MatDialogRef<DialogComponent> {
    return this.dialogRef
  }
}
