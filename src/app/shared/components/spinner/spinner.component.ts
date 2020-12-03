import { Component, OnInit } from '@angular/core'
import { SpinnerService } from '@shared/services/spinner.service'

@Component({
  selector: 'cav-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(public spinnerService: SpinnerService) {}

  ngOnInit(): void {}
}
