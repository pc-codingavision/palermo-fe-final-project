import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import moment from 'moment'

@Component({
  selector: 'cav-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss'],
})
export class CheckInCheckOutComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  minCheckInDate: Date
  minCheckOutDate: Date
  maxCheckInDate: Date

  date: FormGroup = this.fb.group({
    picker1: ['', [Validators.required]],
    picker2: ['', [Validators.required]],
  })

  ngOnInit(): void {
    this.minCheckInDate = moment().toDate()
    this.minCheckOutDate = moment().toDate()
  }

  updateDate(value: Date): void {
    this.minCheckOutDate = value
    this.maxCheckInDate = value
  }
}
