import { Component, OnDestroy, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute } from '@angular/router'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { CheckInCheckOutService } from '@modules/core/advertisement/services/check-in-check-out.service'
import { SidebarService } from '@modules/core/advertisement/services/sidebar.service'
import { ReservationService } from '@modules/shared/services/reservation/reservation.service'
import { IFacility } from '@shared/models/property'
import { IReservation } from '@shared/models/reservation'
import * as _ from 'lodash'
import moment from 'moment'
import { Subject, Subscription } from 'rxjs'
import { combineLatest } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit, OnDestroy {
  advertisements: MockAdvertisement[]
  reservations: IReservation[]
  filteredAdvertisements: MockAdvertisement[] = []
  subscriptions: Subscription[] = []
  showMobileFilters = false

  constructor(
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
    private checkInCheckOutService: CheckInCheckOutService,
    private reservationService: ReservationService,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(
        (data) => (this.advertisements = data.advertisements)
      )
    )
    this.reservationService
      .getAll()
      .subscribe((reservations) => (this.reservations = reservations))
    combineLatest([
      this.sidebarService.price$,
      this.sidebarService.facility$,
      this.sidebarService.score$,
      this.checkInCheckOutService.reservationDates$,
    ]).subscribe(([price, facility, score, reservationDate]) =>
      this.getFilteredAdvertisements(price, score, facility, reservationDate)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

  private getFilteredAdvertisements(
    price: number,
    score: number,
    facility: IFacility,
    reservationDate: { checkIn: Date; checkOut: Date }
  ): void {
    let tmpAdvertisement: MockAdvertisement[] = this.advertisements
    this.filteredAdvertisements = []
    if (price == null && score == null && facility == null && reservationDate == null) {
      this.advertisements?.forEach((adv) => this.filteredAdvertisements.push(adv))
      this.emitPriceUpdate()
    } else {
      if (price != null) {
        tmpAdvertisement = tmpAdvertisement.filter(
          (advertisement) => advertisement.price <= price
        )
      }
      if (score != null) {
        tmpAdvertisement = tmpAdvertisement.filter((adv) => adv.score >= score)
      }
      if (facility != null) {
        const filterActiveFacilities = Object.keys(_.pickBy(facility))
        tmpAdvertisement = tmpAdvertisement.filter((advertisement) => {
          const propertyActiveFacilities = _.pickBy(advertisement.property.facilities)
          // tslint:disable-next-line: no-shadowed-variable
          return filterActiveFacilities.every((facility) =>
            propertyActiveFacilities.hasOwnProperty(facility)
          )
        })
      }
      if (reservationDate != null) {
        const filteredReservations: IReservation[] = this.reservations.filter(
          (res) =>
            (moment(reservationDate.checkIn).isBefore(res.checkIn) &&
              moment(reservationDate.checkOut).isAfter(res.checkOut)) ||
            (moment(reservationDate.checkIn).isAfter(res.checkIn) &&
              moment(reservationDate.checkIn).isBefore(res.checkOut))
        )
        // tslint:disable-next-line: no-unused-declaration
        const filtAdv = tmpAdvertisement.map((val) => val.property.id)
        // tslint:disable-next-line: no-unused-declaration
        const filt = filteredReservations.map((res) => res.propertyId)

        tmpAdvertisement = tmpAdvertisement
        /*     filteredReservations.some((res) => adv.property.id === res.propertyId) */
      }
      tmpAdvertisement.map((adv) => this.filteredAdvertisements.push(adv))
      this.emitPriceUpdate()
    }
  }

  private emitPriceUpdate(): void {
    this.sidebarService.priceRangeChanged$.next({
      minPrice: _.min(this.filteredAdvertisements.map((adv) => adv.price)),
      maxPrice: _.max(this.filteredAdvertisements.map((adv) => adv.price)),
    })
  }

  getReservationDates(): Subject<{ checkIn: Date; checkOut: Date }> {
    return this.checkInCheckOutService.reservationDates$
  }
}
