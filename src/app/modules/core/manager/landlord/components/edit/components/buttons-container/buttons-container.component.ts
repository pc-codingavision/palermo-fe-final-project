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
  @Input() isEdit: boolean
  @Output()
  newPassword = new EventEmitter<string>()
  @Output() saveLandlord = new EventEmitter<void>()
  hidePassword = true
  hideConfirmPassword = true
  toggleResetPasswordContainer = false
  password: FormControl
  confirmPassword: FormControl
  navigationExtras: NavigationExtras

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.password = new FormControl()
    this.confirmPassword = new FormControl()
  }

  goBack(): void {
    this.navigationExtras = {
      queryParams: { landlordId: this.landlord.id },
    }
    this.router.navigate(['/manager/landlord'], this.navigationExtras)
  }

  openResetPasswordContainer(): void {
    this.toggleResetPasswordContainer = !this.toggleResetPasswordContainer
  }

  updateLandlord(): void {
    this.saveLandlord.emit()
  }
}
