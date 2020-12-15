import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'cav-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnInit {
  bookingRequest: FormGroup = this.fb.group({
    guestNumber: ['', Validators.required],
    specialRequest: [''],
  })

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      tenantUsername: string
      propertyName: string
      price: number
      checkIn: Date
      checkOut: Date
    },
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}
}
