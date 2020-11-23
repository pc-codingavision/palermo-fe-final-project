import { Component, OnDestroy, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { SidebarService } from '@modules/core/advertisement/services/sidebar.service'
import { IFacilities } from '@shared/models/property'
import * as _ from 'lodash'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit, OnDestroy {
  advertisements: MockAdvertisement[]
  sidebarMinPrice: number
  sidebarMaxPrice: number
  subscriptions: Subscription[] = []

  constructor(
    private advertisementService: AdvertisementService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.advertisementService
        .findAll()
        .subscribe((advertisements) => (this.advertisements = advertisements))
    )
    this.updateSidebarPrice()
    this.subscriptions.push(
      this.sidebarService.sidebarFilter.subscribe((filter: number | IFacilities) => {
        if (_.isObject(filter)) {
          this.advertisements = this.getAdvertisementsFilteredByFacilities(filter)
          this.updateSidebarPrice()
        }
        if (_.isNumber(filter)) {
          if (filter <= 5) {
            this.advertisements = this.getAdvertisementsFilteredByScore(filter)
            this.updateSidebarPrice()
          } else {
            this.advertisements = this.getAdvertisementsFilteredByPrice(filter)
          }
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }

  updateSidebarPrice(): void {
    this.sidebarService.sidebarPrice.next({
      minPrice: _.min(this.advertisements.map((adv) => adv.price)),
      maxPrice: _.max(this.advertisements.map((adv) => adv.price)),
    })
  }

  getAdvertisementsFilteredByPrice(filter: number): MockAdvertisement[] {
    return this.advertisements.filter((advertisement) => advertisement.price <= filter)
  }

  getAdvertisementsFilteredByScore(filter: number): MockAdvertisement[] {
    const filteredAdvertisements: MockAdvertisement[] = []
    this.advertisements.forEach((advertisement) => {
      if (advertisement.score >= filter) {
        filteredAdvertisements.push(advertisement)
      }
    })
    return filteredAdvertisements
  }

  getAdvertisementsFilteredByFacilities(filter: IFacilities): MockAdvertisement[] {
    const filteredAdvertisements: MockAdvertisement[] = []
    const filterActiveFacilities = Object.keys(_.pickBy(filter))
    this.advertisements.forEach((advertisement) => {
      const propertyActiveFacilities = _.pickBy(advertisement.property.facilities)
      if (
        filterActiveFacilities.every((facility) =>
          propertyActiveFacilities.hasOwnProperty(facility)
        )
      ) {
        filteredAdvertisements.push(advertisement)
      }
    })
    return filteredAdvertisements
  }
}
