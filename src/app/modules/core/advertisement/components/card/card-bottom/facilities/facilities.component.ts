import { Input } from '@angular/core'
import { Component, OnInit } from '@angular/core'
import { IFacilities } from '@shared/models/property'

@Component({
  selector: 'cav-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
})
export class FacilitiesComponent implements OnInit {
  @Input() facilities: IFacilities

  constructor() {}

  ngOnInit(): void {}
}
