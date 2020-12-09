import { Component, OnDestroy, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'
import { ActivatedRoute } from '@angular/router'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { SidebarService } from '@modules/core/advertisement/services/sidebar.service'
import { IFacility } from '@shared/models/property'
import * as _ from 'lodash'
import { Subscription } from 'rxjs'
import { combineLatest } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit, OnDestroy {
  advertisements: MockAdvertisement[]
  filteredAdvertisements: MockAdvertisement[] = []
  subscriptions: Subscription[] = []
  showMobileFilters = false

  constructor(
    private sidebarService: SidebarService,
    private activatedRoute: ActivatedRoute,
    public media: MediaObserver
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.activatedRoute.data.subscribe(
        (data) => (this.advertisements = data.advertisements)
      )
    )
    combineLatest([
      this.sidebarService.price$,
      this.sidebarService.facility$,
      this.sidebarService.score$,
    ]).subscribe(([price, facility, score]) =>
      this.getFilteredAdvertisements(price, score, facility)
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

  private getFilteredAdvertisements(
    price: number,
    score: number,
    facility: IFacility
  ): void {
    let tmpAdvertisement: MockAdvertisement[] = this.advertisements
    this.filteredAdvertisements = []
    if (price == null && score == null && facility == null) {
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
}
