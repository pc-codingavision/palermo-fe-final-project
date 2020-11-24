import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { IFacility } from '@shared/models/property'

export type priceRange = {
  minPrice: null
  maxPrice: null
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  price$ = new BehaviorSubject<number>(null)
  priceRangeChanged$ = new BehaviorSubject<priceRange>(null)
  facility$ = new BehaviorSubject<IFacility>(null)
  score$ = new BehaviorSubject<number>(null)

  constructor() {}
}
