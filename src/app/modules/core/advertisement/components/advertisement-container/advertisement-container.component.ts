import { Component, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable } from 'rxjs'

import { AdvertisementService } from '../../advertisement.service'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisements$: Observable<IMockAdvertisement[]>
  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit(): void {
    this.advertisements$ = this.advertisementService.findAll()
  }
}
