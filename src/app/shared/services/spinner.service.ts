import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinnerStatus: BehaviorSubject<boolean>

  constructor() {
    this.spinnerStatus = new BehaviorSubject(false)
  }

  showSpinner(): void {
    this.spinnerStatus.next(true)
  }

  hideSpinner(): void {
    this.spinnerStatus.next(false)
  }
}
