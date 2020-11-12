import { Component, Input, OnInit } from '@angular/core'
import { IProperty } from '@shared/models/property'

@Component({
  selector: 'cav-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Input() property: IProperty
  constructor() {}

  ngOnInit(): void {}
}
