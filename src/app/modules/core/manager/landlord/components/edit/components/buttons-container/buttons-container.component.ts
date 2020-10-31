import { OpenDialogService } from './../../../../../../../../shared/services/opendialog/open-dialog.service'
import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cav-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.scss'],
})
export class ButtonsContainerComponent implements OnInit {
  constructor(private location: Location, private openDialogService: OpenDialogService) {}

  ngOnInit(): void {}

  goBack(): void {
    this.location.back()
  }

  openDialogInput(): void {
    this.openDialogService.openDialogInput({
      h1: 'Reset Password',
      h2: 'Inserisci la nuova password',
      password: 'ciao',
    })
  }
}
