import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  addressDetailsForm: FormGroup
  @Input() landlord: Landlord

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addressDetailsForm = this.formBuilder.group({
      line1: [this.landlord.address.line1],
      line2: [this.landlord.address.line2],
      city: [this.landlord.address.city],
      state: [this.landlord.address.state],
      zipCode: [this.landlord.address.postCode],
    })
  }
}
