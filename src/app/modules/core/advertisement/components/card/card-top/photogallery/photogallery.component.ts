import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
  @Input() imageObject: Array<object>
  constructor() {}

  ngOnInit(): void {}
}
