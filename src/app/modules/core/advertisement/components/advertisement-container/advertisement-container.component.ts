import { Component, OnInit } from '@angular/core'
import { AdvertisementService } from '@modules/core/advertisement/advertisement.service'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
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

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.advertisements$ = this.advertisementService.findAll()
  }
}
