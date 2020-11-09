import { Component, Input, OnInit } from '@angular/core'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'

@Component({
  selector: 'cav-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
  @Input() advertisements: MockAdvertisement[]
  constructor() {}

  ngOnInit(): void {}
}
