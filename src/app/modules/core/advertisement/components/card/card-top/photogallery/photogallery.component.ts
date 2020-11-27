import { Component, Input, OnInit } from '@angular/core'
import { IPicture } from '@shared/models/property'

@Component({
  selector: 'cav-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
  @Input() images: Array<IPicture>
  constructor() {}

  ngOnInit(): void {
    if (this.images !== undefined && !this?.images?.length) {
      this.images[0] = {
        image: 'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
        thumbImage:
          'https://cdn.pixabay.com/photo/2017/03/20/20/59/home-2160318_960_720.png',
        alt: 'No image',
      }
    }
  }
}
