import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS } from './../../../../../../../../shared/models/mock-data/mock-landlord'
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  landlord = Landlord.Build(LANDLORDS[0])

  constructor(public confirmDialog: MatDialog) {}

  ngOnInit(): void {}

  openDeactivateDialog(): void {
    const deactivateDialogRef = this.confirmDialog.open(ConfirmDialogComponent, {
      data: this.landlord.fullName,
    })

    deactivateDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.landlord.status = false
      }
    })
  }
}
