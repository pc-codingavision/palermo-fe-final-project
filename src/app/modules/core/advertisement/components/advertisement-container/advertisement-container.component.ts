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
import { Subscription, combineLatest } from 'rxjs'

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
  reservationDates: { checkIn: Date; checkOut: Date }
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
    this.getReservationDates()
    this.reservationService.getAll()

    combineLatest([
      this.sidebarService.price$,
      this.sidebarService.facility$,
      this.sidebarService.score$,
      this.checkInCheckOutService.reservationDates$,
      this.reservationService.reservations$,
    ]).subscribe(([price, facility, score, reservationDate, reservations]) =>
      this.getFilteredAdvertisements(
        price,
        score,
        facility,
        reservationDate,
        reservations
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

  private getFilteredAdvertisements(
    price: number,
    score: number,
    facility: IFacility,
    reservationDate: { checkIn: Date; checkOut: Date },
    reservations: IReservation[]
  ): void {
    let tmpAdvertisement: MockAdvertisement[] = this.advertisements?.map((adv) => ({
      ...adv,
    })) as MockAdvertisement[]
    tmpAdvertisement = tmpAdvertisement?.map((adv) => MockAdvertisement.Build(adv))
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
        const filteredReservations: IReservation[] = reservations.filter(
          (res) =>
            (moment(reservationDate.checkIn).isSameOrBefore(res.checkIn) &&
              moment(reservationDate.checkOut).isSameOrAfter(res.checkOut)) ||
            (moment(reservationDate.checkIn).isAfter(res.checkIn) &&
              moment(reservationDate.checkIn).isBefore(res.checkOut))
        )

        const busiedAdv = _.remove(tmpAdvertisement, (adv) =>
          filteredReservations.some((res) => adv.property.id === res.propertyId)
        )

        tmpAdvertisement = _.difference(tmpAdvertisement, busiedAdv)
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

  getReservationDates(): void {
    this.subscriptions.push(
      this.checkInCheckOutService.reservationDates$.subscribe(
        (result) => (this.reservationDates = result)
      )
    )
  }

  setReservationDates(dates: { checkIn: Date; checkOut: Date }): void {
    this.checkInCheckOutService.setReservationDates(dates)
  }

  resetReservationDates(): void {
    this.checkInCheckOutService.resetReservationDates()
  }
}
