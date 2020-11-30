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
  // tslint:disable-next-line: variable-name
  private _images: IPicture[]
  constructor() {}

  ngOnInit(): void {}

  @Input() set images(images: IPicture[]) {
    if (!images?.length) {
      this._images = [
        {
          image:
            'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
          thumbImage:
            'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
          alt: 'No image',
        },
      ]
    } else {
      this._images = images
    }
  }

  get images(): IPicture[] {
    return this._images
  }
}
