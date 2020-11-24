import { Component, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Icon } from '@shared/enum/enums'
import { IReview, IReviewConfig } from '@shared/models/advertisement'
import { ADVERTISEMENTS_MOCK_DATA } from '@shared/models/mock-data/data'
import { Observable } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisements$: Observable<MockAdvertisement[]>
  review = ADVERTISEMENTS_MOCK_DATA[0].reviews[0]
  config: IReviewConfig = {
    writable: true,
    minScore: 1,
    maxScore: 5,
    scoreIcon: Icon.CheckBox,
  }

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.advertisements$ = this.advertisementService.findAll()
  }

  stampa(review: IReview): void {
    console.log(review)
  }
}
