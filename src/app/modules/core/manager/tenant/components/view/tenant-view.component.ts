import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tenant } from '@shared/models/tenant'
import { DialogService } from '@shared/services/dialog.service'

@Component({
  selector: 'cav-tenant-view',
  templateUrl: './tenant-view.component.html',
  styleUrls: ['./tenant-view.component.scss'],
})
export class TenantViewComponent implements OnInit {
  @Input() tenant: Tenant
  @Output() update: EventEmitter<number | Tenant> = new EventEmitter<number | Tenant>()
  tenantForm: FormGroup

  // Deactivate
  titleDeactivate = 'Deactivate'
  subTitleDeactivate = 'Are you sure you want to deactivate this Tenant?'
  textDeactivate =
    'No data will be removed and it will be available as soon the tenant will be activated again.'

  // Activate
  titleActivate = 'Activate'
  subTitleActivate = 'Are you sure you want to activate this Tenant?'
  textActivate = ''

  // Delete
  titleDelete = 'Delete'
  subTitleDelete = 'Are you sure you want to delete this Tenant?'
  textDelete = `This will be removed all the tenant's associated data and it won't be possible to recover them!`

  constructor(private dialogService: DialogService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm()
  }

  setForm(): void {
    this.tenantForm = this.formBuilder.group({
      firstName: [this.tenant?.name.firstName, [Validators.required]],
      lastName: [this.tenant?.name.surname, [Validators.required]],
      email: [this.tenant?.mail, [Validators.required, Validators.email]],
      username: [this.tenant?.username, [Validators.required]],
      dateOfBirth: [this.tenant?.dateOfBirth.toLocaleDateString(), [Validators.required]],
      line1: [this.tenant?.address.line1, [Validators.required]],
      line2: [this.tenant?.address.line2],
      city: [this.tenant?.address.city, [Validators.required]],
      state: [this.tenant?.address.state, [Validators.required]],
      zipCode: [
        this.tenant?.address.postCode,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
    })
  }

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
      .subscribe((result: string) => {
        if (result === 'deactivate' || result === 'activate') {
          this.tenant.status = !this.tenant.status
          this.update.emit(this.tenant)
        } else if (result === 'delete') {
          this.update.emit(this.tenant.id)
        }
      })
  }
}
