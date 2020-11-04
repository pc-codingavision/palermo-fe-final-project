import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'cav-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.scss'],
})
export class ButtonsContainerComponent implements OnInit {
  hidePassword = true
  hideConfirmPassword = true
  toggleResetPasswordContainer = false
  password: FormControl
  confirmPassword: FormControl

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.password = new FormControl()
    this.confirmPassword = new FormControl()
  }

  goBack(): void {
    this.location.back()
  }

  openResetPasswordContainer(): void {
    this.toggleResetPasswordContainer = !this.toggleResetPasswordContainer
  }
}
