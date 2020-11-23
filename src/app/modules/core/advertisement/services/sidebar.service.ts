import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarFilter = new Subject<any>()
  sidebarPrice = new BehaviorSubject<any>({
    minPrice: null,
    maxPrice: null,
  })

  constructor() {}
}
