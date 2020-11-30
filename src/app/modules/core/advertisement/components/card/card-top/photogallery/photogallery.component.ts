import { Component, Input, OnInit } from '@angular/core'

import { IPicture } from './../../../../../../../shared/models/property'

@Component({
  selector: 'cav-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
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
