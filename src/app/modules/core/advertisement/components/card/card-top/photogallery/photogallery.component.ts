import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'cav-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.scss'],
})
export class PhotogalleryComponent implements OnInit {
  @Input() photo: string
  constructor() {}

  ngOnInit(): void {}
}
