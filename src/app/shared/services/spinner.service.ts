import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  visibility: BehaviorSubject<boolean>
  constructor() {
    this.visibility = new BehaviorSubject(false)
  }

  showSpinner(): void {
    this.visibility.next(true)
  }

  hideSpinner(): void {
    this.visibility.next(false)
  }
}
