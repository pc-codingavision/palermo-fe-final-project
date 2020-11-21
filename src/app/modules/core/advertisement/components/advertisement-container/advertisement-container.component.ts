import { Component, OnDestroy, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IFacilities } from '@shared/models/property'
import * as _ from 'lodash'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit, OnDestroy {
  minPrice$: Observable<number>
  maxPrice$: Observable<number>
  advertisements$: Observable<MockAdvertisement[]>
  subscription: Subscription

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.advertisements$ = this.advertisementService.findAll()
    this.minPrice$ = this.getMinPrice()
    this.maxPrice$ = this.getMaxPrice()
    this.subscription = this.advertisementService.sidebarFilter.subscribe(
      (filter: number | IFacilities) => {
        if (_.isObject(filter)) {
          this.advertisements$ = this.advertisementService.getAdvertisementsFilteredByFacilities(
            filter
          )
        }
        if (_.isNumber(filter)) {
          if (filter <= 5) {
            this.advertisements$ = this.advertisementService.getAdvertisementsFilteredByScore(
              filter
            )
          } else {
            this.advertisements$ = this.advertisementService.getAdvertisementsFilteredByPrice(
              filter
            )
          }
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  getMinPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsLowestPrice(this.advertisements$)
  }

  getMaxPrice(): Observable<number> {
    return this.advertisementService.findAdvertisementsHighestPrice(this.advertisements$)
  }
}
