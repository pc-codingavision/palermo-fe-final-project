import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
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
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactDetailsForm = this.formBuilder.group({
      phone: [this.landlord.phone[0].digits],
      mobile: [this.landlord.phone[1].digits],
      email: [this.landlord.mail],
    })
  }
}
