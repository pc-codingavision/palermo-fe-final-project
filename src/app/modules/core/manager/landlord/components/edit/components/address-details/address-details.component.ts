import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  @Input() landlord: Landlord
  addressDetailsForm: FormGroup

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getData()
  }

  getData(): void {
    this.addressDetailsForm = this.formBuilder.group({
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
    })
  }
}
