import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MockAdvertisement } from '@modules/core/advertisement/mock-advertisement/mock-advertisement'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'cav-advertisement-container',
  templateUrl: './advertisement-container.component.html',
  styleUrls: ['./advertisement-container.component.scss'],
})
export class AdvertisementContainerComponent implements OnInit {
  advertisements$: Observable<MockAdvertisement[]>

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => (this.advertisements$ = of(data.result)))
  }
}
