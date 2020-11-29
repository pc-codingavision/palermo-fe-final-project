import { Component, Input, OnInit } from '@angular/core'
import { IMockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { IPicture } from '@shared/models/property'

@Component({
  selector: 'cav-latest-mini-card',
  templateUrl: './latest-mini-card.component.html',
  styleUrls: ['./latest-mini-card.component.scss'],
})
export class LatestMiniCardComponent implements OnInit {
  @Input() advertisement: IMockAdvertisement
  @Input() images: IPicture[]
  constructor() {}

  ngOnInit(): void {
    if (!this.images?.length) {
      this.images = [
        {
          image:
            'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
          thumbImage:
            'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
          alt: 'No image',
        },
      ]
    }
  }
}
