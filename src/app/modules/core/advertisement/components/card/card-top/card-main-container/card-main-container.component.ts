import { Component, Input, OnInit } from '@angular/core'
import { NewReservationComponent } from '@modules/core/advertisement/components/reservation/new-reservation/new-reservation.component'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { CheckInCheckOutService } from '@modules/core/advertisement/services/check-in-check-out.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'
import { IUser } from '@shared/models/users'
import { DialogService } from '@shared/services/dialog.service'
import { Subject } from 'rxjs'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit {
  @Input() advertisement: MockAdvertisement
  showCardExtra = false
  scoreConfig: IScoreConfig
  currentUser: IUser
  reservationDates: { checkIn: Date; checkOut: Date }

  constructor(
    private checkInCheckOutService: CheckInCheckOutService,
    private dialogService: DialogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: false,
      minScore: 0,
      maxScore: 5,
      score: this.advertisement?.score,
      scoreIcon: Icon.Star,
    }
    this.getCurrentUser()
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }

  getReservationDates(): Subject<{ checkIn: Date; checkOut: Date }> {
    return this.checkInCheckOutService.reservationDates$
  }

  setReservationDates(dates: { checkIn: Date; checkOut: Date }): void {
    this.checkInCheckOutService.setReservationDates(dates)
  }

  openBookingDialog(): void {
    this.dialogService.openCustomDialog(NewReservationComponent, {
      tenantUsername: this.currentUser.username,
      propertyName: this.advertisement.property.title,
      price: this.advertisement.price,
      checkIn: this.reservationDates.checkIn,
      checkOut: this.reservationDates.checkOut,
    })
  }

  getCurrentUser(): void {
    this.authService.currentUser$.subscribe((user) => (this.currentUser = user))
    this.getReservationDates().subscribe(
      (reservationDates) => (this.reservationDates = reservationDates)
    )
  }
}
