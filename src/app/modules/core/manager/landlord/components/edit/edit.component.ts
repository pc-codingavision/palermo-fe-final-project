import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { LandlordService } from '@modules/shared/services/landlord/landlord.service'
import { Landlord } from '@shared/models/landlord'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'cav-edit-container',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
  isEditLandlord: boolean
  togglePictureContainer = false
  toggleResetPasswordContainer = false
  hidePassword = true
  hideConfirmPassword = true
  isSavedForm = false
  defaultPicture = 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg'
  maxDate = new Date()
  landlord: Landlord
  landlord$: Subscription
  landlordForm: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private landlordService: LandlordService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.isEditLandlord = this.activatedRoute?.snapshot?.url[0]?.path === 'edit'
    this.getLandlord()
  }

  ngOnDestroy(): void {
    if (this.isEditLandlord) {
      this.landlord$.unsubscribe()
    }
  }

  getLandlord(): void {
    if (this.isEditLandlord) {
      const id = +this.activatedRoute.snapshot.paramMap.get('id')
      this.landlord$ = this.landlordService.getById(id).subscribe((landlord) => {
        this.landlord = landlord
        this.setForm()
      })
    } else {
      this.landlord = Landlord.Build()
      this.togglePictureContainer = true
      this.toggleResetPasswordContainer = true
      this.landlord.status = true
      this.setForm()
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
      phone1: [
        this.landlord?.phone[0]?.digits,
        [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')],
      ],
      phone2: [
        this.landlord?.phone[1]?.digits,
        [Validators.minLength(6), Validators.pattern('^[0-9]*$')],
      ],
      phoneType1: [this.landlord?.phone[0]?.type],
      phoneType2: [this.landlord?.phone[1]?.type],
      email: [this.landlord?.mail, [Validators.required, Validators.email]],
      picture: [this.landlord?.picture ? this.landlord.picture : this.defaultPicture],
      password: [this.landlord?.password, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        this.landlord?.password,
        [Validators.required, Validators.minLength(8)],
      ],
    })
  }

  validateForm(): boolean {
    return (
      this.landlordForm.valid &&
      this.landlordForm.value.password &&
      this.landlordForm.value.password === this.landlordForm.value.confirmPassword
    )
  }

  updateLandlord(): void {
    this.isSavedForm = true
    const newLandlord: Landlord = {
      id: this.landlord.id,
      name: {
        firstName: this.landlordForm.value.firstName,
        surname: this.landlordForm.value.lastName,
      },
      phone: [
        {
          id: 1,
          type: this.landlordForm?.value?.phoneType1,
          digits: this.landlordForm?.value?.phone1,
        },
        {
          id: 2,
          type: this.landlordForm?.value?.phoneType2,
          digits: this.landlordForm?.value?.phone2,
        },
      ],
      mail: this.landlordForm.value.email,
      picture: this.landlordForm.value.picture,
      username: this.landlordForm.value.username,
      password: this.landlordForm.value.password,
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

    let newLandlord$: Observable<Landlord>
    if (this.isEditLandlord) {
      newLandlord$ = this.landlordService.update(newLandlord)
    } else {
      this.landlordService.add(newLandlord)
    }

    newLandlord$.subscribe((l) => console.log(`New Landlord: `, l))

    // this.snackBarService.openSnackBar('The landlord was saved', 'Cancel', 3000)
  }

  goBack(): void {
    const navigationExtras = {
      queryParams: { id: this.landlord.id },
    }
    this.router.navigate(['/manager/landlord'], navigationExtras)
  }

  canExit(): boolean {
    if (this.landlordForm.dirty && !this.isSavedForm) {
      return confirm('The data will not be saved')
    }
    return true
  }
}
