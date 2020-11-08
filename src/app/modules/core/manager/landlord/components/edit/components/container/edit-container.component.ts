import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { AddressDetailsComponent } from '@modules/core/manager/landlord/components/edit/components/address-details/address-details.component'
import { ContactDetailsComponent } from '@modules/core/manager/landlord/components/edit/components/contact-details/contact-details.component'
import { PersonalDetailsComponent } from '@modules/core/manager/landlord/components/edit/components/personal-details/personal-details.component'
import { PhoneType } from '@shared/enum/enums'
import { Subscription } from 'rxjs'
import { Landlord } from 'src/app/shared/models/landlord'

import { LandlordService } from './../../../../../../../shared/services/landlord/landlord.service'

@Component({
  selector: 'cav-edit-container',
  templateUrl: './edit-container.component.html',
  styleUrls: ['./edit-container.component.scss'],
})
export class EditContainerComponent implements OnInit, OnDestroy {
  @ViewChild(AddressDetailsComponent, { static: false })
  addressRef: AddressDetailsComponent

  @ViewChild(ContactDetailsComponent, { static: false })
  contactRef: ContactDetailsComponent

  @ViewChild(PersonalDetailsComponent, { static: false })
  personalRef: PersonalDetailsComponent

  password: string
  isEdit: boolean
  togglePictureContainer = false
  landlord: Landlord
  landlord$: Subscription
  picture: FormControl

  constructor(
    private activatedRoute: ActivatedRoute,
    private landlordService: LandlordService
  ) {}

  ngOnInit(): void {
    this.isEdit = this.activatedRoute?.snapshot?.url[0]?.path === 'edit'
    if (this.isEdit) {
      this.getLandlord()
    } else {
      this.landlord = Landlord.Build()
      this.togglePictureContainer = true
    }
    this.picture = new FormControl(this.landlord?.picture)
    this.password = this.landlord?.password
  }

  ngOnDestroy(): void {
    if (this.isEdit) {
      this.landlord$.unsubscribe()
    }
  }

  getLandlord(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')
    this.landlord$ = this.landlordService
      .getById(id)
      .subscribe((landlord) => (this.landlord = landlord))
  }

  updateLandlord(): void {
    const newLandlord: Landlord = {
      id: this.landlord.id,
      name: {
        firstName: this.personalRef.personalDetailsForm.value.firstName,
        surname: this.personalRef.personalDetailsForm.value.lastName,
      },
      phone: [
        {
          id: 1,
          type: PhoneType.Mobile,
          digits: this.contactRef.contactDetailsForm.value.mobile,
        },
        {
          id: 2,
          type: PhoneType.Home,
          digits: this.contactRef.contactDetailsForm.value.phone,
        },
      ],
      mail: this.contactRef.contactDetailsForm.value.email,
      picture: this.picture.value,
      username: this.landlord.username,
      password: this.password,
      status: this.landlord.status,
      dateOfBirth: this.personalRef.personalDetailsForm.value.dateOfBirth,
      role: this.landlord.role,
      address: {
        line1: this.addressRef.addressDetailsForm.value.line1,
        city: this.addressRef.addressDetailsForm.value.city,
        state: this.addressRef.addressDetailsForm.value.state,
        postCode: this.addressRef.addressDetailsForm.value.zipCode,
      },
      fullName: '',
    }

    this.isEdit
      ? this.landlordService.update(newLandlord)
      : this.landlordService.add(newLandlord)
  }
}
