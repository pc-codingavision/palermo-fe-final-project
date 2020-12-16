import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import moment from 'moment'

@Component({
  selector: 'cav-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss'],
})
export class CheckInCheckOutComponent implements OnInit {
  @Input() reservationDate: { checkIn: Date; checkOut: Date }
  @Input() disabledPicker: boolean
  @Output() toggleDatesInput = new EventEmitter<{ checkIn: Date; checkOut: Date }>()
  minCheckInDate: Date
  minCheckOutDate: Date
  maxCheckInDate: Date
  date: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.minCheckInDate = moment().toDate()
    this.minCheckOutDate = moment().toDate()

    this.date = this.fb.group({
      picker1: new FormControl(
        { value: '', disabled: this.disabledPicker },
        Validators.required
      ),
      picker2: new FormControl(
        { value: '', disabled: this.disabledPicker },
        Validators.required
      ),
    })

    if (this.reservationDate) {
      this.date.setValue({
        picker1: this.reservationDate.checkIn,
        picker2: this.reservationDate.checkOut,
      })
    }
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
      this.toggleDatesInput.emit({
        checkIn: this.date.value.picker1,
        checkOut: this.date.value.picker2,
      })
    }
  }
}
