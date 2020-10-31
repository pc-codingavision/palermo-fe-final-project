import { IDialogDataInput } from './../../models/dialog-data-input'
import { ResetPasswordComponent } from './../../../modules/core/manager/landlord/components/edit/components/reset-password/reset-password.component'
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

  openDialogInput(dialogData: IDialogDataInput): void {
    this.dialogRef = this.dialog.open(ResetPasswordComponent, { data: dialogData })
  }

  getDialogRef(): MatDialogRef<DialogComponent> {
    return this.dialogRef
  }
}
