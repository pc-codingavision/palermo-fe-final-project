import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { NavigationExtras, Router } from '@angular/router'
import { Landlord } from '@shared/models/landlord'

@Component({
  selector: 'cav-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.scss'],
})
export class ButtonsContainerComponent implements OnInit {
  @Input() landlord: Landlord
  @Output() newPassword = new EventEmitter<string>()
  @Output() newLandlord = new EventEmitter<void>()
  hidePassword = true
  hideConfirmPassword = true
  toggleResetPasswordContainer = false
  password: FormControl
  confirmPassword: FormControl

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.password = new FormControl()
    this.confirmPassword = new FormControl()
  }

  goBack(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { landlordId: this.landlord.id },
    }
    this.router.navigate(['/manager/landlord'], navigationExtras)
  }

  openResetPasswordContainer(): void {
    this.toggleResetPasswordContainer = !this.toggleResetPasswordContainer
  }

  updatePassword(): void {
    this.newPassword.emit(this.password.value)
  }

  updateLandlord(): void {
    this.newLandlord.emit()
  }
}
