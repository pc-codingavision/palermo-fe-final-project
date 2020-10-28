import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Landlord } from 'src/app/shared/models/landlord'

import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() remove = new EventEmitter<any>()
  constructor(public confirmDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(type: string): void {
    const dialogRef = this.confirmDialog.open(ConfirmDialogComponent, {
      data: { fullName: this.landlord.fullName, status: this.landlord.status, type },
    })

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.landlord.status = !this.landlord.status
      } else {
        this.remove.emit(this.landlord)
      }
    })
  }
}
