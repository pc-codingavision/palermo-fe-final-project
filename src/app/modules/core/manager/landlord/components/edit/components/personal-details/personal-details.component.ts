import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  personalDetailsForm: FormGroup
  @Input() landlord: Landlord

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.personalDetailsForm = this.formBuilder.group({
      firstName: [this.landlord.name.firstName],
      middleName: [this.landlord.name.middleName],
      lastName: [this.landlord.name.surname],
      dateOfBirth: [this.landlord.dateOfBirth],
    })
  }
}
