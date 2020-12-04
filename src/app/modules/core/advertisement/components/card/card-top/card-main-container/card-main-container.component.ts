import { Component, Input, OnInit } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { CheckInCheckOutService } from '@modules/core/advertisement/services/check-in-check-out.service'
import { Icon } from '@shared/enum/enums'
import { IScoreConfig } from '@shared/models/advertisement'
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

  constructor(private checkInCheckOutService: CheckInCheckOutService) {}

  ngOnInit(): void {
    this.scoreConfig = {
      writable: false,
      minScore: 0,
      maxScore: 5,
      score: this.advertisement?.score,
      scoreIcon: Icon.Star,
    }
  }

  expandCardExtra(): void {
    this.showCardExtra = !this.showCardExtra
  }

  isFavourite(favourite: boolean): void {
    console.log('favourite: ', favourite)
  }

  getReservationDates(): Subject<{ checkIn: Date; checkOut: Date }> {
    return this.checkInCheckOutService.reservationDates$
  }
}
