import { ComponentType } from '@angular/cdk/overlay'
import { Injectable } from '@angular/core'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'

import { DialogComponent } from './../components/dialog/dialog.component'
import { IDialogData } from './../models/dialog-data'

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogRef: MatDialogRef<any>
  constructor(private dialog: MatDialog) {}

  openDialog(dialogData: IDialogData): void {
    this.dialogRef = this.dialog.open(DialogComponent, { data: dialogData })
  }

  openCustomDialog(dialogComponent: ComponentType<any>, dialogData: any): void {
    this.dialogRef = this.dialog.open(dialogComponent, { data: dialogData })
  }

  getDialogRef(): MatDialogRef<any> {
    return this.dialogRef
  }
}
