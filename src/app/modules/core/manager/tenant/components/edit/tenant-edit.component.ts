import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { InMemoryTenantService } from '@modules/shared/services/tenant/in-memory-tenant.service'
import { Tenant } from '@shared/models/tenant'
import { DialogService } from '@shared/services/dialog.service'
import { SpinnerService } from '@shared/services/spinner.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cav-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.scss'],
})
export class TenantEditComponent implements OnInit, OnDestroy {
  tenant: Tenant
  subscription: Subscription
  tenantForm: FormGroup
  maxDate = new Date()
  defaultPicture = 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg'

  constructor(
    private inMemoryTenantService: InMemoryTenantService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinnerService: SpinnerService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.spinnerService.showSpinner()
    this.getTenant()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getTenant(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.subscription = this.inMemoryTenantService.getById(id).subscribe((tenant) => {
      this.tenant = tenant
      this.setForm()
      this.spinnerService.hideSpinner()
    })
  }

  setForm(): void {
    this.tenantForm = this.formBuilder.group({
      firstName: [
        this.tenant?.name.firstName,
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [
        this.tenant?.name.surname,
        [Validators.required, Validators.minLength(2)],
      ],
      email: [this.tenant?.mail, [Validators.required, Validators.email]],
      username: [this.tenant?.username, [Validators.required, Validators.minLength(2)]],
      dateOfBirth: [this.tenant?.dateOfBirth, [Validators.required]],
      line1: [this.tenant?.address.line1, [Validators.required, Validators.minLength(4)]],
      line2: [this.tenant?.address.line2, Validators.minLength(4)],
      city: [this.tenant?.address.city, [Validators.required, Validators.minLength(4)]],
      state: [this.tenant?.address.state, [Validators.required, Validators.minLength(4)]],
      zipCode: [
        this.tenant?.address.postCode,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      picture: [this.tenant?.picture ? this.tenant.picture : this.defaultPicture],
    })
  }

  validateForm(): boolean {
    return this.tenantForm.valid
  }

  openDialog(operation: string): void {
    const newTenant: Tenant = {
      id: this.tenant.id,
      name: {
        firstName: this.tenantForm.value.firstName,
        surname: this.tenantForm.value.lastName,
      },
      phone: [
        {
          id: 1,
          type: this.tenantForm?.value?.phoneType1,
          digits: this.tenantForm?.value?.phone1,
        },
        {
          id: 2,
          type: this.tenantForm?.value?.phoneType2,
          digits: this.tenantForm?.value?.phone2,
        },
      ],
      mail: this.tenantForm.value.email,
      picture: this.tenantForm.value.picture,
      username: this.tenantForm.value.username,
      password: this.tenantForm.value.password,
      status: this.tenant.status,
      dateOfBirth: this.tenantForm.value.dateOfBirth,
      role: this.tenant.role,
      address: {
        line1: this.tenantForm.value.line1,
        city: this.tenantForm.value.city,
        state: this.tenantForm.value.state,
        postCode: this.tenantForm.value.zipCode,
      },
      fullName: '',
    }

    if (operation === 'save') {
      this.dialogService.openDialog({
        title: 'Are you sure?',
        subtitle: `The information on the tenant ${this.tenant?.fullName} has changed.`,
        text: 'Do you want to save the changes?',
        returnValue: operation,
      })
    } else if (operation === 'cancel') {
      this.dialogService.openDialog({
        title: 'Cancel it?',
        subtitle: `The information on the tenant ${this.tenant?.fullName} has changed.`,
        text: 'If you cancel, you will loose the changes. Do you want to cancel it?',
        returnValue: operation,
      })
    }

    this.subscription = this.dialogService
      .getDialogRef()
      .afterClosed()
      .subscribe((result: string) => {
        if (result === 'save') {
          this.inMemoryTenantService.update(newTenant).subscribe()
          this.inMemoryTenantService.add(newTenant).subscribe()
          this.goBack()
        } else if (result === 'cancel') {
          this.setForm()
          this.goBack()
        }
      })
  }

  goBack(): void {
    const navigationExtras = {
      queryParams: { id: this.tenant.id },
    }
    this.router.navigate(['/manager/tenant'], navigationExtras)
  }
}
