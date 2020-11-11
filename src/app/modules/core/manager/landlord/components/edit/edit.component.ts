import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { PhoneType } from '@shared/enum/enums'
import { Landlord } from '@shared/models/landlord'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cav-edit-container',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  isEdit: boolean
  togglePictureContainer = false
  toggleResetPasswordContainer = false
  hidePassword = true
  hideConfirmPassword = true
  maxDate = new Date()
  landlord: Landlord
  landlord$: Subscription
  landlordForm: FormGroup
  password: FormControl
  confirmPassword: FormControl
  picture: FormControl

  constructor(
    private activatedRoute: ActivatedRoute,
    private landlordService: LandlordService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEdit = this.activatedRoute?.snapshot?.url[0]?.path === 'edit'
    this.getLandlord()
    this.setForm()
  }

  ngOnDestroy(): void {
    if (this.isEdit) {
      this.landlord$.unsubscribe()
    }
  }

  setForm(): void {
    this.landlordForm = this.formBuilder.group({
      firstName: [
        this.landlord?.name.firstName,
        [Validators.required, Validators.minLength(2)],
      ],
      middleName: [this.landlord?.name.middleName, [Validators.minLength(2)]],
      lastName: [
        this.landlord?.name.surname,
        [Validators.required, Validators.minLength(2)],
      ],
      line1: [
        this.landlord?.address.line1,
        [Validators.required, Validators.minLength(4)],
      ],
      line2: [this.landlord?.address.line2],
      city: [this.landlord?.address.city, [Validators.required, Validators.minLength(4)]],
      state: [
        this.landlord?.address.state,
        [Validators.required, Validators.minLength(4)],
      ],
      zipCode: [
        this.landlord?.address.postCode,
        [Validators.required, Validators.minLength(5), Validators.maxLength(5)],
      ],
      dateOfBirth: [this.landlord?.dateOfBirth],
      mobile: [
        this.landlord?.phone[1]?.digits,
        [Validators.required, Validators.minLength(8)],
      ],
      phone: [this.landlord?.phone[0]?.digits],
      email: [this.landlord?.mail, [Validators.required, Validators.email]],
      picture: [this.landlord?.picture],
    })
    this.password = new FormControl(this.landlord.password)
    this.confirmPassword = new FormControl(this.landlord.password)
    this.picture = new FormControl(this.landlord.picture)
  }

  getLandlord(): void {
    if (this.isEdit) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id')
      this.landlord$ = this.landlordService
        .getById(id)
        .subscribe((landlord) => (this.landlord = landlord))
    } else {
      this.landlord = Landlord.Build()
      this.togglePictureContainer = true
      this.toggleResetPasswordContainer = true
    }
  }

  updateLandlord(): void {
    const newLandlord: Landlord = {
      id: this.landlord.id,
      name: {
        firstName: this.landlordForm.value.firstName,
        surname: this.landlordForm.value.lastName,
      },
      phone: [
        {
          id: 1,
          type: PhoneType.Mobile,
          digits: this.landlordForm.value.mobile,
        },
        {
          id: 2,
          type: PhoneType.Home,
          digits: this.landlordForm.value.phone,
        },
      ],
      mail: this.landlordForm.value.email,
      picture: this.picture.value,
      username: this.landlord.username,
      password: this.password.value,
      status: this.landlord.status,
      dateOfBirth: this.landlordForm.value.dateOfBirth,
      role: this.landlord.role,
      address: {
        line1: this.landlordForm.value.line1,
        city: this.landlordForm.value.city,
        state: this.landlordForm.value.state,
        postCode: this.landlordForm.value.zipCode,
      },
      fullName: '',
    }

    this.isEdit
      ? this.landlordService.update(newLandlord)
      : this.landlordService.add(newLandlord)
  }

  goBack(): void {
    const navigationExtras = {
      queryParams: { id: this.landlord.id },
    }
    this.router.navigate(['/manager/landlord'], navigationExtras)
  }

  validateForm(): boolean {
    return this.landlordForm.valid && this.password.value === this.confirmPassword.value
  }
}
