import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'cav-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  // DeactivateDialog
  h1 = ''
  h2 = ''
  p = ''
  isDeactivateDialog: boolean
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    if (this.data.type === 'deactivate') {
      this.h1 = 'Deactivate'
      this.h2 = 'Are you sure you want to deactivate this Landlord?'
      this.p =
        'No data will be removed and it will be available as soon the landlord will be activated again.'
      this.isDeactivateDialog = true
    } else if (this.data.type === 'activate') {
      this.h1 = 'Activate'
      this.h2 = 'Are you sure you want to activate this Landlord?'
      this.p = ''
      this.isDeactivateDialog = true
    } else if (this.data.type === 'delete') {
      this.h1 = 'Delete'
      this.h2 = 'Are you sure you want to delete this Landlord?'
      this.p = `This will be removed all the landlord's associated data and it won't be possible to recover them!`
      this.isDeactivateDialog = false
    }
  }
}
