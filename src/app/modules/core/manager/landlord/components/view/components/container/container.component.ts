import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Landlord } from 'src/app/shared/models/landlord'

import { LANDLORDS } from './../../../../../../../../shared/models/mock-data/mock-landlord'

@Component({
  selector: 'cav-view-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ViewContainerComponent implements OnInit {
  landlord = Landlord.Build(LANDLORDS[0])

  constructor(public deactivateDialog: MatDialog) {}

  ngOnInit(): void {}

  openDeactivateDialog(): void {
    this.deactivateDialog.open(DeactivateDialog)
  }
}

@Component({
  selector: 'deactivate-dialog',
  template: ` <h1 mat-dialog-title>Deactivate</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to deactivate this Landlord?</p>
      <p>
        No data will be removed and it will be available as soon the landlord will be
        activated again.
      </p>
      <button mat-button color="primary">Confirm</button>

      <button mat-button color="warn">Cancel</button>
    </div>`,
})
export class DeactivateDialog {
  constructor() {}
}
