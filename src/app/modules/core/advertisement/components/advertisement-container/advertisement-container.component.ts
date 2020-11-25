import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable, Subscription, of } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit, OnDestroy {
  advertisements: MockAdvertisement[]

  subsription: Subscription

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subsription = this.activatedRoute.data.subscribe(
      (data) => (this.advertisements = data.advertisements)
    )
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe()
  }
}
