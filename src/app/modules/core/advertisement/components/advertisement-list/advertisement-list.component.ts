import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'

import { AdvertisementService } from './../../advertisement.service'

@Component({
  selector: 'cav-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
})
export class AdvertisementListComponent implements OnInit {
  constructor(private advService: AdvertisementService) {}

  advertisements: Observable<any[]>

  ngOnInit(): void {
    this.advertisements = this.advService.getAll()
  }
}
