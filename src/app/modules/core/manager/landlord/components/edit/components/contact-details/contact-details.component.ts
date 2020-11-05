import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Landlord } from 'src/app/shared/models/landlord'

@Component({
  selector: 'cav-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contactDetailsForm: FormGroup
  @Input() landlord: Landlord
  value = ''
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getData()
  }

  private getData(): void {
    this.contactDetailsForm = this.formBuilder.group({
      mobile: [
        this.landlord?.phone[1].digits,
        [Validators.required, Validators.minLength(8)],
      ],
      phone: [this.landlord?.phone[0].digits],
      email: [this.landlord?.mail, [Validators.required, Validators.email]],
    })
  }
}
