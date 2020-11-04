import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  @Input() landlord: Landlord
  personalDetailsForm: FormGroup
  maxDate = new Date()

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getData()
  }

  private getData(): void {
    this.personalDetailsForm = this.formBuilder.group({
      firstName: [
        this.landlord.name.firstName,
        [Validators.required, Validators.minLength(2)],
      ],
      middleName: [this.landlord.name.middleName, [Validators.minLength(2)]],
      lastName: [
        this.landlord.name.surname,
        [Validators.required, Validators.minLength(2)],
      ],
      dateOfBirth: [this.landlord.dateOfBirth],
    })
  }
}
