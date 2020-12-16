import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { NewReservationComponent } from '@modules/core/advertisement/components/reservation/new-reservation/new-reservation.component'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { CheckInCheckOutService } from '@modules/core/advertisement/services/check-in-check-out.service'
import { AuthService } from '@modules/core/auth/auth.service'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'
import { IUser } from '@shared/models/users'
import { DialogService } from '@shared/services/dialog.service'
import { SnackBarService } from '@shared/services/snack-bar.service'
import { Subject, Subscription } from 'rxjs'

@Component({
  selector: 'cav-card-main-container',
  templateUrl: './card-main-container.component.html',
  styleUrls: ['./card-main-container.component.scss'],
})
export class CardMainContainerComponent implements OnInit, OnDestroy {
  @Input() advertisement: MockAdvertisement
  showCardExtra = false
  scoreConfig: IScoreConfig
  currentUser: IUser
  reservationDates: { checkIn: Date; checkOut: Date }
  subscriptions: Subscription[] = []

  constructor(
    private checkInCheckOutService: CheckInCheckOutService,
    private dialogService: DialogService,
    private authService: AuthService,
    private snackBarService: SnackBarService,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: false,
      minScore: 0,
      maxScore: 5,
      score: this.advertisement?.score,
      scoreIcon: Icon.Star,
    }
    this.getReservationInfo()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
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
    if (this.currentUser.id) {
      this.dialogService.openCustomDialog(NewReservationComponent, {
        tenantUsername: this.currentUser.username,
        propertyName: this.advertisement.property.title,
        price: this.advertisement.price,
        checkIn: this.reservationDates.checkIn,
        checkOut: this.reservationDates.checkOut,
      })

      this.subscriptions.push(
        this.dialogService
          .getDialogRef()
          .afterClosed()
          .subscribe((result: { guestNumber: number; specialRequest: string }) => {
            if (result) {
              const newReservation = {
                id: null,
                tenantId: this.currentUser.id,
                propertyId: this.advertisement.property.id,
                guestNumber: +result.guestNumber,
                checkIn: this.reservationDates.checkIn,
                checkOut: this.reservationDates.checkOut,
                specialRequest: result.specialRequest,
              }
              this.reservationService
                .add(newReservation)
                .subscribe(() =>
                  this.snackBarService.openSnackBar('Reservation made correctly', 'Close')
                )
            }
          })
      )
    } else {
      this.snackBarService.openSnackBar('You must be logged to make a booking', 'Close')
    }
  }

  getReservationInfo(): void {
    this.subscriptions.push(
      this.authService.currentUser$.subscribe((user) => (this.currentUser = user))
    )
    this.subscriptions.push(
      this.getReservationDates().subscribe(
        (reservationDates) => (this.reservationDates = reservationDates)
      )
    )
  }
}
