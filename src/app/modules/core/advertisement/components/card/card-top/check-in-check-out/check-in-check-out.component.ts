import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CheckInCheckOutService } from '@modules/core/advertisement/services/check-in-check-out.service'
import moment from 'moment'

@Component({
  selector: 'cav-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss'],
})
export class CheckInCheckOutComponent implements OnInit {
  minCheckInDate: Date
  minCheckOutDate: Date
  maxCheckInDate: Date
  date: FormGroup = this.fb.group({
    picker1: ['', [Validators.required]],
    picker2: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private checkInCheckoutService: CheckInCheckOutService
  ) {}

  ngOnInit(): void {
    this.minCheckInDate = moment().toDate()
    this.minCheckOutDate = moment().toDate()
  }

  updateMinCheckOutDate(value: Date): void {
    this.minCheckOutDate = value
    this.toggleDates()
  }

  updateMaxCheckInDate(value: Date): void {
    this.maxCheckInDate = value
    this.toggleDates()
  }

  toggleDates(): void {
    if (this.date.status === 'VALID') {
      this.checkInCheckoutService.setReservationDates(
        this.minCheckInDate,
        this.minCheckOutDate
      )
    }
  }
}
