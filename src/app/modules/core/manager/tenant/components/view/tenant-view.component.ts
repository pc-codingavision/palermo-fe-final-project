import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Tenant } from '@shared/models/tenant'
import { DialogService } from '@shared/services/dialog.service'

@Component({
  selector: 'cav-tenant-view',
  templateUrl: './tenant-view.component.html',
  styleUrls: ['./tenant-view.component.scss'],
})
export class TenantViewComponent implements OnInit {
  @Input() tenant: Tenant
  @Output() toggleStatus: EventEmitter<Tenant> = new EventEmitter<Tenant>()
  @Output() deleteTenant: EventEmitter<number> = new EventEmitter<number>()
  tenantForm: FormGroup

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  openDialogStatus(operation: string): void {
    if (operation === 'deactivate') {
      this.dialogService.openDialog({
        title: 'Deactivate',
        subtitle: `Are you sure you want to deactivate the tenant ${this.tenant?.fullName}?`,
        text:
          'No data will be removed and it will be available as soon the tenant will be activated again.',
        returnValue: operation,
      })
    } else if (operation === 'activate') {
      this.dialogService.openDialog({
        title: 'Activate',
        subtitle: `Are you sure you want to activate the tenant ${this.tenant.fullName}?`,
        text: '',
        returnValue: operation,
      })
    }

    this.dialogService
      .getDialogRef()
      .afterClosed()
      .subscribe((result: string) => {
        if (result === 'deactivate' || result === 'activate') {
          this.tenant.status = !this.tenant.status
          this.toggleStatus.emit(this.tenant)
        }
      })
  }

  openDialogDelete(operation: string): void {
    if (operation === 'delete') {
      this.dialogService.openDialog({
        title: 'Delete',
        subtitle: `Are you sure you want to delete the tenant ${this.tenant.fullName}?`,
        text: `This will be removed all the tenant's associated data and it won't be possible to recover them!`,
        returnValue: operation,
      })
    }

    this.dialogService
      .getDialogRef()
      .afterClosed()
      .subscribe((result: string) => {
        if (result === 'delete') {
          this.deleteTenant.emit(this.tenant.id)
        }
      })
  }
}
